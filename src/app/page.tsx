import {
  ArrowRight,
  Briefcase,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Dumbbell,
  CookingPot,
  MonitorPlay,
  Swords,
  CircleDollarSign,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const featuredProjects = [
  {
    title: "ReAct Chatbot",
    description:
      "Built a ReAct AI chatbot that combines reasoning and tool use to iteratively plan, execute actions, and generate more accurate responses.",
    stack: ["JavaScript", "OpenAI’s API"],
    githubHref: "#",
    demoHref: "#",
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    title: "Chrome Extension Dashboard",
    description:
      "Built a Chrome Extension dashboard that aggregates real-time data from multiple APIs, displaying weather, cryptocurrency prices, and Unsplash images with metadata in a unified interface.",
    stack: ["Javascript", "CSS", "CoinGecko API" , "Unsplash API"],
    githubHref: "https://github.com/anosh1000/DashboardChromeExtension",
    demoHref: "https://dashboard-anosh.netlify.app/",
    accent: "from-cyan-500/25 to-emerald-500/10",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["Enim", "Ad", "Minim"],
    githubHref: "#",
    demoHref: "#",
    accent: "from-amber-500/25 to-orange-500/10",
  },
] as const;

const experience = [
  {
    role: "Software Developer Intern",
    company: "Guild Mortgage",
    period: "June 2024 — August 2024",
    detail:
      "Built an internal event management platform on Appian to streamline company-wide hackathon planning and coordination. Collaborated with cross-functional stakeholders to define requirements and authored comprehensive (60-page) end-user documentation to improve usability and onboarding.",
  },
  {
    role: "Engineering Test Lab Intern",
    company: "PPG",
    period: "May 2023 — August 2023",
    detail:
      "Cleared a nine-month backlog in fighter jet windshield craze testing by redesigning test procedures and streamlining specimen handling, restoring on-time delivery for critical aerospace clients. Wired and validated a multi-sensor data acquisition system and evaluated calibration software for engineering use.",
  },
] as const;

const hobbies = [
  {
    title: "Exercise",
    body: "Resistance training in the gym and playing sports like basketball, volleyball, and football.",
    icon: Dumbbell,
  },
  {
    title: "Cooking",
    body: "Chefing up beef wellington, ravioli, creme brulee, tom ka gai, and lox bagels, all from scratch.",
    icon: CookingPot,
  },
  {
    title: "TV & Youtube",
    body: "Watching NFL, NBA, Attack on Titan, Better Call Saul, and The Office.",
    icon: MonitorPlay,
  },
  {
    title: "Chess",
    body: "Playing over 10,000 games of chess on chess.com. Love the variants of Chess960, Atomic, Horde, 4 player, and Duck Chess.",
    icon: Swords,
  },
  {
    title: "Poker",
    body: "Studying theory and playing live poker with college friends at friendly home games.",
    icon: CircleDollarSign,
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(263_70%_58%/0.35),transparent)]"
      />

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <p className="animate-fade-up font-mono text-sm text-accent opacity-0 [animation-delay:0ms]">
          Available for collaborations
        </p>
        <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground opacity-0 [animation-delay:80ms] sm:text-5xl lg:text-6xl">
          I build websites
        </h1>
        <p className="animate-fade-up mt-6 max-w-2xl text-lg text-muted-foreground opacity-0 [animation-delay:160ms]">
          FullStack engineer focused on user experience, performance, and
          thoughtful UX
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap gap-3 opacity-0 [animation-delay:240ms]">
          <Button asChild size="lg">
            <Link href="#projects">
              View projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl opacity-50" />

      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden />
              About
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Recent San Diego State Graduate. Passionate about technology and building products that help people.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-4 font-mono text-xs text-muted-foreground sm:max-w-xs">
            <p>Currently tinkering with JavaScript, the OpenAI API, and React.</p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-20 border-t border-border/60 bg-secondary/20 py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <Code2 className="h-6 w-6 text-accent" aria-hidden />
                Featured projects
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                A few highlights from recent work.
              </p>
            </div>
            <Button asChild variant="ghost" className="self-start sm:self-auto">
              <Link href="#contact">
                Start a project with me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="group flex flex-col overflow-hidden border-border/80 bg-card transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`h-28 bg-gradient-to-br ${project.accent} border-b border-border/60`}
                />
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="grid w-full gap-2 sm:grid-cols-2">
                    {project.githubHref === "#" ? (
                      <Button
                        variant="secondary"
                        className="w-full cursor-not-allowed px-2 text-xs opacity-50"
                        disabled
                      >
                        GitHub Soon
                      </Button>
                    ) : (
                      <Button asChild variant="secondary" className="w-full px-2 text-xs">
                        <Link
                          href={project.githubHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repo
                        </Link>
                      </Button>
                    )}
                    {project.demoHref === "#" ? (
                      <Button
                        variant="outline"
                        className="w-full cursor-not-allowed px-2 text-xs opacity-50"
                        disabled
                      >
                        Demo Soon
                      </Button>
                    ) : (
                      <Button asChild variant="outline" className="w-full px-2 text-xs">
                        <Link
                          href={project.demoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
          <Briefcase className="h-6 w-6 text-primary" aria-hidden />
          Experience
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Roles that shaped how I think about ownership, communication, and
          sustainable delivery.
        </p>
        <ul className="mt-10 space-y-6">
          {experience.map((job) => (
            <li
              key={job.company}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-semibold text-foreground">{job.role}</p>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-accent">{job.period}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {job.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="hobbies"
        className="scroll-mt-20 border-t border-border/60 bg-secondary/20 py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Hobbies</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            My side quests
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {hobbies.map((h) => {
              const Icon = h.icon;
              return (
                <Card key={h.title} className="border-border/80 bg-card">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary" aria-hidden />
                    <CardTitle className="text-base">{h.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{h.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
      >
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-secondary/30">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Contact</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Get in touch with me. I will reply ASAP.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="default">
              <Link href="mailto:anoshtaraporevala@gmail.com">
                <Mail className="h-4 w-4" />
                anoshtaraporevala@gmail.com
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.linkedin.com/in/anosh-taraporevala/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://github.com/anosh1000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Anosh Taraporevala. Built with Next.js, Tailwind
        CSS, and shadcn/ui.</p>
      </footer>
    </div>
  );
}
