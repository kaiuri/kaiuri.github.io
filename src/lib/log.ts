type Log = <T>(value: T, opts?: { message?: string; disable?: boolean }) => T;

export const log: Log = (value, opts = { disable: import.meta.env.PROD }) => {
  if (opts.disable) return value;
  if (opts?.message) console.log(opts!.message);
  console.log(value);
  return value;
};
