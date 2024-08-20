export function fn_parse_date(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Los meses empiezan desde 0
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Ajustar la hora a la zona horaria deseada si es necesario
  const adjustedDate = new Date(dateString);
  adjustedDate.setHours(hours - 5);

  const adjustedHours = adjustedDate.getUTCHours();
  const adjustedMinutes = adjustedDate.getUTCMinutes();

  // Formatear los minutos para que siempre tengan dos dígitos
  const formattedMinutes =
    adjustedMinutes < 10 ? `0${adjustedMinutes}` : adjustedMinutes;

  return `${day}/${month}/${year}, ${adjustedHours}:${formattedMinutes}`;
}
