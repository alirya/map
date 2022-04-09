import Once, {OnceValue} from '../../dist/once';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const allResult = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const nextResult = [ 'a', 'b', 'c', 'd', 'e'];

    const sorted : OnceValue<string>[] = [
        {value:'a'},
        {value:'b'},
        {value:'c'},
        {value:'d'},
        {value:'e'},
        {value:'f', once: true},
        {value:'g', once: true},
    ];

    it('get', function() {

        const source = new Once(new Map<string, OnceValue<string>>(sorted.map(value=>[value.value, value])));

        expect(source.size).toEqual(7);

        const f = source.get('f');

        expect(source.size).toEqual(6);

        expect(f).toEqual({value:'f', once: true});

        const nextF = source.get('f');

        expect(nextF).toEqual(undefined);
    });

    it('value', function() {

        const source = new Once(new Map<string, OnceValue<string>>(sorted.map(value=>[value.value, value])));

        expect(source.size).toEqual(7);

        const result = [...source.values()];

        expect(source.size).toEqual(5);

        expect(result.map(data=>data.value)).toEqual(allResult);

        const next = [...source.values()];

        expect(next.map(data=>data.value)).toEqual(nextResult);
    });

    it('key', function() {

        const source = new Once(new Map<string, OnceValue<string>>(sorted.map(value=>[value.value, value])));

        expect(source.size).toEqual(7);

        const result = [...source.keys()];

        expect(source.size).toEqual(7);

        expect(result).toEqual(allResult);

        const next = [...source.keys()];

        expect(next).toEqual(allResult);
    });


    it('entries', function() {

        const source = new Once(new Map<string, OnceValue<string>>(sorted.map(value=>[value.value, value])));

        expect(source.size).toEqual(7);

        const result = [...source.entries()].map(([unused, callback])=>callback);

        expect(source.size).toEqual(5);

        expect(result.map(data=>data.value)).toEqual(allResult);

        const next = [...source.entries()].map(([unused, callback])=>callback);

        expect(next.map(data=>data.value)).toEqual(nextResult);
    });

    it('forEach', function() {

        const result : OnceValue<string>[] = [];

        const source = new Once(new Map<string, OnceValue<string>>(sorted.map(value=>[value.value, value])));

        expect(source.size).toEqual(7);

        source.forEach((value, key) => {

            result.push(value);
        });

        expect(source.size).toEqual(5);

        expect(result.map(data=>data.value)).toEqual(allResult);

        const next : OnceValue<string>[] = [];

        source.forEach((value, key) => {

            next.push(value);
        });

        expect(next.map(data=>data.value)).toEqual(nextResult);
    });

    it('for', function() {

        const result : OnceValue<string>[] = [];

        const source = new Once(new Map<string, OnceValue<string>>(sorted.map(value=>[value.value, value])));

        expect(source.size).toEqual(7);

        for(const [unused, value] of source) {

            result.push(value);
        }

        expect(source.size).toEqual(5);

        expect(result.map(data=>data.value)).toEqual(allResult);

        const next : OnceValue<string>[] = [];

        for(const [unused, value] of source) {

            next.push(value);
        }

        expect(next.map(data=>data.value)).toEqual(nextResult);
    });

});
