export interface GenerateAngularLibraryGeneratorSchema {
  name: string;
  domain: 'finance' | 'hr' | 'marketing' | 'inventory' | 'shared';
  type: 'ui' | 'data-access' | 'util' | 'feature' | 'all';
}
