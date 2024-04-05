export function useDependencyInjectionSchema () {
  const formFieldWrapper = {
    name: Symbol('name') as InjectionKey<string>
  }

  return {
    formFieldWrapper
  }
}