import {MapperParameters} from '../../dist/mapper';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('test', function() {

    const source = new Map<number, number>();
    source.set(1, 2);
    source.set(3, 4);

    const mapped = MapperParameters(source, (k, v)=>[k.toString(), v.toString()]);

    expect(mapped.get('1')).toEqual('2');
    expect(mapped.get('3')).toEqual('4');

});
