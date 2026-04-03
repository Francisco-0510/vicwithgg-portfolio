// ============================================
// UTILIDADES - VicWithGG Portfolio
// ============================================

/**
 * Formatea una fecha a formato legible
 */
export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return d.toLocaleDateString("es-MX", options || defaultOptions);
}

/**
 * Trunca un texto a una longitud máxima
 */
export function truncate(
  text: string,
  maxLength: number,
  suffix = "...",
): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Genera un slug a partir de un texto
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

/**
 * Capitaliza la primera letra de un texto
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convierte un número a formato con separadores de miles
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("es-MX");
}

/**
 * Genera un ID único
 */
export function generateId(prefix = ""): string {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Verifica si un elemento está en el viewport
 */
export function isInViewport(element: HTMLElement, offset = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Scroll suave a un elemento
 */
export function scrollToElement(selector: string, offset = 0): void {
  const element = document.querySelector(selector);
  if (element) {
    const top =
      /*       element.getBoundingClientRect().top + window.pageYOffset - offset; */
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
}

/**
 * Detecta preferencia de modo oscuro del sistema
 */
export function prefersDarkMode(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

/**
 * Detecta si el usuario prefiere movimiento reducido
 */
export function prefersReducedMotion(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Obtiene el año actual
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Calcula años de experiencia desde una fecha
 */
export function calculateYears(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  return now.getFullYear() - start.getFullYear();
}

/**
 * Agrupa un array por una clave
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce(
    (result, item) => {
      const groupKey = String(item[key]);
      result[groupKey] = result[groupKey] || [];
      result[groupKey].push(item);
      return result;
    },
    {} as Record<string, T[]>,
  );
}

/**
 * Ordena un array por una clave
 */
export function sortBy<T>(
  array: T[],
  key: keyof T,
  order: "asc" | "desc" = "asc",
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
}

/**
 * Filtra elementos únicos de un array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Divide un array en chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
  return array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / size);
    result[chunkIndex] = result[chunkIndex] || [];
    result[chunkIndex].push(item);
    return result;
  }, [] as T[][]);
}
