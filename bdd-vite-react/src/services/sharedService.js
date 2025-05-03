export function useSharedService() {
  const getMessage = () => 'Shared service message!';
  return { getMessage };
}
