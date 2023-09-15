export const markdownContent = `
# The Odd Couple: How Typography and Tailwind CSS Found Love in a Hopeless Place

Ah, Typography and Tailwind CSS—a match made in developer heaven, or perhaps a sitcom waiting to happen. Imagine Typography as the meticulous, old-school librarian who insists on proper kerning, line-height, and font families. She's got glasses perched on her nose and a ruler to measure the exact space between letters. Enter Tailwind, the hip, utility-first millennial who walks into the library wearing a "Just Do It" t-shirt and flip-flops. He's all about speed, efficiency, and "Why write a whole CSS class when you can just slap text-xl on that bad boy?"

At first glance, you'd think they're incompatible. Typography would scoff at Tailwind's lack of formality, while Tailwind would roll his eyes at Typography's obsession with em dashes and ligatures. But then, something magical happens. Tailwind realizes he can actually be more expressive with Typography's nuanced settings. "You mean I can use leading-snug and font-serif together?" he exclaims. Meanwhile, Typography finds Tailwind's utility classes oddly liberating. "I never thought I'd say this, but text-center is actually quite revolutionary," she admits.

And so, they form an unlikely alliance. Tailwind starts respecting the font-family and Typography begins to appreciate the art of !important. They still have their disagreements, like when Tailwind wants to use text-purple-500 for headings and Typography nearly faints. But at the end of the day, they both agree on one thing: making the web a better-looking place, one utility class and font pairing at a time.
`;

// A naive Markdown-to-HTML conversion function (for demonstration)
export const convertMarkdownToHTML = (markdown: string) => {
  return markdown
    .replace(/# (.+)/g, "<h1>$1</h1>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, " ")
    .replace(/^(.+)$/g, "<p>$1</p>");
};
