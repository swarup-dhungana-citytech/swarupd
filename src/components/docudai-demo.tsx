import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ChatMsg {
  id: number;
  from: "bot" | "user";
  content: React.ReactNode;
}

interface Choice {
  label: string;
  onClick: () => void;
}

type InputMode = "none" | "choices" | "text" | "textarea";

function PrdField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="label-mono text-foreground">{label}</div>
      <div className="mt-0.5 text-muted-foreground">{value}</div>
    </div>
  );
}

function PrdList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="label-mono text-foreground">{label}</div>
      <ul className="mt-0.5 list-disc space-y-1 pl-4 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function DocudaiDemo() {
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);
  const [inputMode, setInputMode] = useState<InputMode>("none");
  const [placeholder, setPlaceholder] = useState("");
  const [value, setValue] = useState("");
  const [choices, setChoices] = useState<Choice[]>([]);

  const idRef = useRef(0);
  const answers = useRef({ what: "", who: "", problem: "" });
  const submitHandler = useRef<((v: string) => void) | null>(null);
  const timers = useRef<number[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  function addMsg(from: "bot" | "user", content: React.ReactNode) {
    idRef.current += 1;
    setMsgs((m) => [...m, { id: idRef.current, from, content }]);
  }

  function botTyping(next: () => void, delay = 900) {
    setTyping(true);
    const t = window.setTimeout(() => {
      setTyping(false);
      next();
    }, delay);
    timers.current.push(t);
  }

  function askText(ph: string, onSubmit: (v: string) => void) {
    setPlaceholder(ph);
    setValue("");
    setInputMode("text");
    submitHandler.current = (v) => {
      addMsg("user", v);
      setInputMode("none");
      onSubmit(v);
    };
  }

  function reset() {
    setMsgs([]);
    setChoices([]);
    setInputMode("choices");
    answers.current = { what: "", who: "", problem: "" };
    addMsg(
      "bot",
      "Hi, I'm Docudai. I can draft a PRD with you conversationally, or review one you already have. Which do you want to try?",
    );
    setChoices([
      { label: "Draft a new PRD", onClick: startDraft },
      { label: "Review a PRD", onClick: startReview },
    ]);
  }

  function startDraft() {
    setInputMode("none");
    setChoices([]);
    botTyping(() => {
      addMsg("bot", "Nice, let's draft one together. What are we building?");
      askText("e.g. a referral program for our app", (v) => {
        answers.current.what = v;
        askWho();
      });
    });
  }

  function askWho() {
    botTyping(() => {
      addMsg("bot", "Got it. Who is this primarily for?");
      askText("e.g. existing free-tier users", (v) => {
        answers.current.who = v;
        askProblem();
      });
    });
  }

  function askProblem() {
    botTyping(() => {
      addMsg("bot", "And what's the core problem they have today that this solves?");
      askText("e.g. no incentive to invite teammates", (v) => {
        answers.current.problem = v;
        generatePrd();
      });
    });
  }

  function generatePrd() {
    botTyping(() => {
      addMsg("bot", "Give me a second to draft this out.");
      botTyping(
        () => {
          const { what, who, problem } = answers.current;
          addMsg(
            "bot",
            <div className="space-y-3">
              <div className="label-mono text-accent">PRD Draft</div>
              <PrdField label="Working Title" value={what} />
              <PrdField label="Primary User" value={who} />
              <PrdField label="Problem" value={problem} />
              <PrdList
                label="Goals"
                items={[
                  `Ship a first usable version validating the core hypothesis behind “${what}”`,
                  `Reduce friction for ${who} within the first release`,
                ]}
              />
              <PrdList
                label="Non-goals"
                items={[
                  "Platform-wide rollout before validating with the initial cohort",
                  "Advanced customization options in v1",
                ]}
              />
              <PrdList
                label="Success Metric"
                items={["Define and track one primary activation metric within 30 days of launch"]}
              />
            </div>,
          );
          setChoices([{ label: "Start over", onClick: reset }]);
          setInputMode("choices");
        },
        1300,
      );
    }, 700);
  }

  function startReview() {
    setInputMode("none");
    setChoices([]);
    botTyping(() => {
      addMsg("bot", "Paste a PRD to review, or use the sample to see how this works.");
      setValue("");
      setInputMode("textarea");
      setChoices([
        {
          label: "Use sample PRD",
          onClick: () => {
            addMsg("user", "Use the sample PRD.");
            setInputMode("none");
            setChoices([]);
            runReview();
          },
        },
      ]);
    });
  }

  function runReview() {
    botTyping(
      () => {
        addMsg(
          "bot",
          <div className="space-y-3">
            <div className="inline-block rounded-md border border-accent px-2.5 py-1 font-mono text-sm font-semibold text-accent">
              7.5 / 10
            </div>
            <PrdList
              label="What's Working"
              items={[
                "Problem statement is specific and grounded in a real user complaint",
                "Scope is narrow enough to ship in one release",
              ]}
            />
            <PrdList
              label="What to Fix"
              items={[
                "No success metric defined, add one measurable outcome before this ships",
                "Three non-goals listed, but the current scope still touches platform-wide settings, tighten it",
              ]}
            />
          </div>,
        );
        setChoices([{ label: "Try another", onClick: reset }]);
        setInputMode("choices");
      },
      1300,
    );
  }

  function handleTextSubmit() {
    const v = value.trim();
    if (!v || !submitHandler.current) return;
    const handler = submitHandler.current;
    submitHandler.current = null;
    setValue("");
    handler(v);
  }

  function handleReviewSubmit() {
    const v = value.trim();
    addMsg("user", v ? `Pasted a ${v.length}-character draft for review.` : "Use the sample PRD.");
    setValue("");
    setInputMode("none");
    setChoices([]);
    runReview();
  }

  useEffect(() => {
    reset();
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [msgs, typing, choices]);

  return (
    <div className="rounded-md border border-border">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          style={{ boxShadow: "0 0 6px var(--color-accent)" }}
        />
        <span className="text-sm font-medium">Docudai</span>
        <span className="label-mono ml-auto text-muted-foreground">Scripted demo</span>
      </div>

      <div ref={bodyRef} className="flex h-[340px] flex-col gap-3 overflow-y-auto p-4">
        {msgs.map((m) => (
          <div
            key={m.id}
            className={cn(
              "max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed",
              m.from === "bot"
                ? "self-start rounded-bl-sm bg-muted"
                : "self-end rounded-br-sm bg-accent text-accent-foreground",
            )}
          >
            {m.content}
          </div>
        ))}

        {typing && (
          <div className="flex w-fit items-center gap-1 self-start rounded-lg rounded-bl-sm bg-muted px-3.5 py-3">
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
              style={{ animationDelay: "-0.3s" }}
            />
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
              style={{ animationDelay: "-0.15s" }}
            />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
          </div>
        )}

        {choices.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {choices.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={c.onClick}
                className="rounded-full border border-accent px-3.5 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
              >
                {c.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {(inputMode === "text" || inputMode === "textarea") && (
        <div className="flex gap-2 border-t border-border p-3">
          {inputMode === "text" ? (
            <Input
              value={value}
              placeholder={placeholder}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleTextSubmit();
              }}
              autoFocus
            />
          ) : (
            <Textarea
              value={value}
              placeholder="Paste PRD text here..."
              onChange={(e) => setValue(e.target.value)}
              className="min-h-[52px]"
            />
          )}
          <Button size="sm" onClick={inputMode === "text" ? handleTextSubmit : handleReviewSubmit}>
            {inputMode === "text" ? "Send" : "Review"}
          </Button>
        </div>
      )}
    </div>
  );
}
