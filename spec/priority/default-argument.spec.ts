import Priority from "../../dist/priority";
import Shuffle from "@alirya/array/shuffle-parameters";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const sorted : string[] = [
        'a',
        'b',
        'c',
        'd',
        'e',
    ];

    const source = new Priority<string>(sorted.map(value=>[value, {}]));

    it('check get', function () {

        expect(source.get('a')).toEqual({priority:0});

    });

    it('test', function() {

        expect([...source.values()]).toEqual([{priority:0}, {priority:0}, {priority:0}, {priority:0}, {priority:0}]);
        expect([...source.keys()]).toEqual(['a', 'b', 'c', 'd', 'e']);
        expect([...source.entries()]).toEqual(sorted.map(value=>[value, {priority:0}]));
    });

});
