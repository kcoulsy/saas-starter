declare module '*.hbs' {
  type Template = <T extends Record<string, unknown>>(data: T) => string;
  const value: Template;
  export default value;
}
