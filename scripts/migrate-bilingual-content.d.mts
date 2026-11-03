type Fields = Record<string, unknown>;
export function firestoreConfig(env?: Record<string, string | undefined>): Promise<{
  projectId: string;
  appId: string;
  apiKey: string;
  authDomain: string;
  databaseId: string;
} | null>;
export function planChanges(
  table: string,
  payloadRecords: Fields[],
  currentDocs: Map<string, Fields>,
  patchFor: (table: string, seed: Fields, current: Fields) => Fields,
): { id: string; patch: Fields; before: Fields; source: Fields }[];
export function rollbackFields(
  current: Fields,
  entry: { id: string; before: Fields; applied: Fields },
  deleteField: () => unknown,
): Fields;
