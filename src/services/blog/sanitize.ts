import DOMPurify from "dompurify";

const decodeHtmlEntities = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

export const sanitizeText = (text: string) => {
  const sanitized = DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "b",
      "i",
      "a",
      "blockquote",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
    ALLOWED_ATTR: ["href", "title", "target", "rel"],
  });

  return decodeHtmlEntities(sanitized);
};
