// convert sec to m s format and if larger than 5mins will ignore seconds
export const convertTime = (sec: number) => {
  const diff = Math.floor(sec - Date.now() / 1000);
  if (diff >= 300) return `${Math.floor(diff / 60)}m`;
  if (diff < 60) return `${diff}s`;
  return `${Math.floor(diff / 60)}m ${diff % 60}s`;
};
