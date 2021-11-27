export default function ReplaceParameter<Key, Value>({ destination, source, }: {
    destination: Map<Key, Value>;
    source: Map<Key, Value>;
}): Map<Key, Value>;
