/**
 * @member `"InvalidCharacter" - the client provided an invalid character when creating a session slug
 * @member `"TooLong"` - the client's slug is too long
 */
type ToSessionSlugError = "InvalidCharacter" | "TooLong";

/**
 * A regular expression matching any string that contains only these types of characters:
 * - English alphabet characters
 * - Numeric characters
 * - Hyphens (`-`)
 * - Spaces (` `)
 */
const SESSION_NAME_PATTERN = new RegExp("^[a-zA-Z0-9- ]+$");

const MAX_SLUG_LENGTH = 36;

const ERROR_MESSAGES = {
  InvalidCharacter:
    "The session name contains an invalid character. Only English alphabetical characters, numerical characters, spaces, and hyphens are permitted.",
  TooLong:
    "The session name produces a session slug that is too long. Please ensure the slug is at most 36 characters.",
} as const satisfies Readonly<Record<ToSessionSlugError, string>>;

const spaceToHyphen = (character: string) =>
  character === " " ? "-" : character;
const toLowerCase = (character: string) => character.toLowerCase();

const toSnakeCase = (sessionName: string) => {
  const characters = sessionName.split("");
  return characters.map(spaceToHyphen).map(toLowerCase).join("");
};

export const toSessionSlug = (
  sessionSlugLike: string
): { errors: ToSessionSlugError[]; slug: string } => {
  const errors: ToSessionSlugError[] = [];
  const slug = toSnakeCase(sessionSlugLike);
  if (!SESSION_NAME_PATTERN.test(sessionSlugLike)) {
    console.log("huh?", sessionSlugLike);
    errors.push("InvalidCharacter");
  }
  if (slug.length > MAX_SLUG_LENGTH) {
    errors.push("TooLong");
  }
  return { errors, slug };
};

export const messageFromError = (
  errorType: ToSessionSlugError
): (typeof ERROR_MESSAGES)[ToSessionSlugError] => ERROR_MESSAGES[errorType];
