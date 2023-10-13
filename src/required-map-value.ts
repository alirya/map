import RequiredMap from './required-map';


export default class RequiredMapValue<Key, Value>  extends Map<Key, Value>  implements RequiredMap<Key, Value>  {

    constructor(
        entries: readonly (readonly [Key, Value])[] | null,
        public defaultValue: Value
    ) {
        super(entries);
    }


    get(key: Key): Value {

        return this.has(key) ? super.get(key) as Value : this.defaultValue;
    }
}
