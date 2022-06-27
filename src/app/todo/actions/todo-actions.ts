export class AddItemAction {
  /* Unique Identifier: Context and Description of Action */
  static readonly type = '[TODO page] Add item';
  /* Actions have similar to Events some Arguments to pass */
  constructor(public name: string) {}
}

export class ToggleItemAction {
  /* Unique Identifier: Context and Description of Action */
  static readonly type = '[TODO page] Toggle Item';
  constructor(public id: number) {}
}
