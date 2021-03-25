const EMBED_URL_PREFIX = 'https://anchor.fm/developers-cafe/embed/episodes/';

export function convertEmbedUrl(url: string): string {
  const match = url.match(/^https:\/\/anchor.fm\/developers-cafe\/episodes\/(.*)$/);
  if (match === null) return url;
  return `${EMBED_URL_PREFIX}${match[1]}`;
}
