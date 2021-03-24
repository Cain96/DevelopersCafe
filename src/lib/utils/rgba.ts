import hexRgb from 'hex-rgb';

export function rgba(color: string, alpha: number): string {
  return `rgba(${hexRgb(color, { format: 'array' }).slice(0, -1).join(',')},${alpha})`;
}
