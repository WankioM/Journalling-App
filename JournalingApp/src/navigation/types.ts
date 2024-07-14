// types.ts
export type RootStackParamList = {
    SignUp: undefined;
    Login: undefined;
    JournalEntry: undefined;
    JournalView: undefined;
    Categorization: undefined;
    SummaryView: undefined;
    Settings: undefined;
    MainApp: { username: string; entries: { date: string; title: string; content: string }[] };
  };
  