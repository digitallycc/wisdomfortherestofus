import { book } from "./book";

export const hero = {
  tagline: "Wisdom does not belong to one religion, one philosophy, one culture, or one kind of person.",
  description: `It may appear in a sacred text, a philosophical argument, a contemplative tradition, a scientific insight, a story, a life honestly examined, or a question that refuses to go away. Wherever it appears, it deserves to be approached with seriousness. Not blindly accepted. Not rejected because it came from somewhere unfamiliar. Not immediately absorbed into what we already believe. But examined. Tested. Lived with.`,
  cta: "Read the Book Free",
  secondaryText: "No payment. No registration. No conversion. No new identity required.",
};

export const emptinessExplanation = {
  title: "What does \u201Cemptiness\u201D mean?",
  body: `Emptiness does not mean that nothing exists. It does not mean that life is meaningless. It does not mean that people, suffering, responsibility, love, faith, or moral duty are unreal.`,
  precise: `Nothing\u2014including the self\u2014exists as a completely separate, fixed, and independent thing.`,
  examples: [
    "A chair depends on materials, parts, design, labour, language, purpose, and use.",
    "An emotion depends on memory, interpretation, expectation, fatigue, fear, bodily sensation, and circumstance.",
    "A person depends on body, language, ancestry, relationship, culture, memory, habit, hope, grief, and change.",
  ],
  conclusion: "The self is not nothing. But it may not be the solid owner we have imagined. And if the self is not fixed, suffering may not be fixed either.",
};

export const whyBuddhism = {
  title: "Why begin with Buddhist emptiness?",
  body: `Because some traditions have examined certain human questions with unusual depth. Buddhist thought has spent centuries examining: the nature of the self; the causes of suffering; attachment and clinging; dependent existence; perception and mental construction; the relationship between change and freedom; the difference between experience and the stories built around it.`,
  clarification: `That does not mean wisdom belongs exclusively to Buddhism. It means Buddhism has developed powerful tools for looking at these particular questions. The aim is to encounter an insight carefully enough that it is allowed to challenge us before we translate it back into what we already know — not to borrow a Buddhist identity, declare all religions the same, or turn Buddhist teachings into vague universal spirituality.`,
};

export const wisdomWithoutConversion = {
  title: "Wisdom without conversion",
  body: `A person should be able to learn from a tradition without pretending to belong to it. A Muslim may learn from Buddhism. A Buddhist may learn from Christianity. A believer may learn from a philosopher. A religious person may learn from science. A skeptic may learn from a sacred text.`,
  note: "To learn from another source is not necessarily to surrender one\u2019s own identity. Nor is it permission to flatten differences. Real learning requires both openness and honesty.",
  opennessQuestion: "What truth may be present here?",
  honestyQuestion: "What does this source actually say, and where might I be misunderstanding it?",
  closing: "Wisdom for the Rest of Us exists between those two questions.",
};

export const whoWeAre = {
  title: "Who are \u201Cthe rest of us\u201D?",
  body: `Not only scholars. Not only monks, priests, mystics, philosophers, or lifelong practitioners.`,
  list: [
    "jobs",
    "families",
    "debts",
    "aging parents",
    "uncertain futures",
    "private regrets",
    "old anger",
    "religious commitments",
    "doubts",
    "tired bodies",
    "complicated relationships",
    "unfinished questions",
    "minds that keep turning every experience into a story about \u201Cme\u201D",
  ],
  conclusion: `The rest of us may never enter a monastery, philosophy department, meditation centre, seminary, or retreat. But we still live with pride, fear, suffering, comparison, change, loss, responsibility, and the need for meaning. Wisdom matters here too. In the office. At home. During conflict. After failure. In prayer. In grief. In the moment before a harsh sentence is spoken. In the small decision not to make everything about ourselves.`,
};

export const platformPrinciples = {
  is: [
    "serious encounters with ideas",
    "wisdom crossing cultural and religious boundaries",
    "careful reading",
    "open inquiry",
    "ordinary human application",
    "respectful disagreement",
    "learning without forced identity",
    "questions that remain alive after the page ends",
  ],
  isNot: [
    "a Buddhist organisation",
    "an interfaith institution",
    "a conversion project",
    "a claim that all religions teach the same thing",
    "a platform for attacking religious belief",
    "a collection of motivational quotations",
    "a promise of easy enlightenment",
    "an attempt to replace scholars, teachers, or living traditions",
  ],
  conclusion:
    "It is simply a place where a valuable idea can be examined without first asking whether it belongs to \u201Cus\u201D or \u201Cthem\u201D.",
};

export const bookJourney = {
  title: "The first book",
  partOne: {
    title: book.parts[0].title,
    subtitle: book.parts[0].subtitle,
    description: book.parts[0].description,
  },
  partTwo: {
    title: book.parts[1].title,
    subtitle: book.parts[1].subtitle,
    description: book.parts[1].description,
  },
  transition: "The movement is from understanding to seeing, and from seeing to living.",
};

export const reviewerSection = {
  title: "For reviewers, teachers, reading groups, and interviewers",
  body: "The book is freely available for serious reading, criticism, and discussion.",
  welcomes: [
    "honest reviews",
    "critical responses",
    "reading-group discussions",
    "podcast conversations",
    "interviews",
    "university and community dialogues",
    "Buddhist responses",
    "philosophical responses",
    "responses from readers of other religious traditions",
    "disagreement offered in good faith",
  ],
  note: "No favourable conclusion is expected. Private correspondence will never be quoted publicly without explicit permission.",
};

export const finalQuestion = {
  invitation: `The next time you feel praised, criticised, ignored, frightened, ashamed, or compelled to prove yourself, pause for a moment. Notice what has gathered. Body. Feeling. Memory. Interpretation. Fear. Pride. The wish to be seen. The need to defend. Then ask:`,
  question: "Where is the fixed \u201CI\u201D inside all of this?",
  instruction: "Do not rush to answer. Look.",
};

export const essaysList = [
  "Is the witness another form of the self?",
  "Why emptiness does not mean nothingness",
  "How anger becomes identity",
  "The ego\u2019s spiritual scorecard",
  "Why the ego can make a career out of overcoming the ego",
  "Purpose as participation rather than significance",
  "Can we learn from a religion without becoming its followers?",
  "Why I did not translate Buddhist emptiness into Islamic language",
] as const;
