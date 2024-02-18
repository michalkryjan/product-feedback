export function useDependencyInjectionSchema () {
  const formFieldWrapper = {
    name: Symbol('name') as InjectionKey<string>,
    isRequired: Symbol('isRequired') as InjectionKey<boolean>
  }

  return { formFieldWrapper }
}