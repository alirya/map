import RefreshInterval from '../../dist/refresh-interval.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('has', ()=>{

    let ttl : RefreshInterval<string, object>;

    it('initial', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.set('c', {});
        });

    });

    it('add data', function() {

        ttl.set('a', {});
        expect(ttl.has('a')).toBeTrue();
        expect(ttl.has('c')).toBeFalse();
        expect(ttl.size).toEqual(1);
    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect(ttl.has('a')).toBeTrue();
        expect(ttl.has('c')).toBeTrue();
        expect(ttl.size).toEqual(2);
    });
});

describe('iterator', ()=>{

    let ttl : RefreshInterval<string, object>;

    it('initial', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.set('c', {});
        });

    });

    it('add data', function() {

        ttl.set('a', {});
        expect([...ttl]).toEqual([['a', {}]]);

    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual([['a', {}], ['c', {}]]);
    });
});

describe('values', ()=>{

    let ttl : RefreshInterval<string, object>;

    it('initial', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.set('c', {});
        });

    });

    it('add data', function() {

        ttl.set('a', {});
        expect([...ttl]).toEqual([['a', {}]]);

    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual([['a', {}], ['c', {}]]);
    });
});

describe('keys', ()=>{

    let ttl : RefreshInterval<string, object>;

    it('initial', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.set('c', {});
        });

    });

    it('add data', function() {

        ttl.set('a', {});
        expect([...ttl]).toEqual([['a', {}]]);

    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual([['a', {}], ['c', {}]]);
    });
});

