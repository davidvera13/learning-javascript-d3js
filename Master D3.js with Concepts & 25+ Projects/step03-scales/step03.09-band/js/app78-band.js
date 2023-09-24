// d3.scaleband()
let bandScale = d3.scaleBand();

/*
<------------------------range----------------------->
<-op->                 <--ip-->                 <-op->
      |---------------|        |---------------|
      0               1        1               2
      <---bandwidth--->        <---bandwidth--->

      <---------step--------->

op = outer padding
ip = inner padding
step = distance between starts of adjacent bands
bandwidth = width of each band

*/

console.log('bandScale', bandScale);
console.log('bandScale.range()', bandScale.range());
console.log('bandScale.domain()', bandScale.domain());
console.log('bandScale.bandwidth()', bandScale.bandwidth());
console.log('bandScale.align()', bandScale.align());
console.log('bandScale.paddingOuter()', bandScale.paddingOuter());
console.log('bandScale.paddingInner()', bandScale.paddingInner());
console.log('bandScale.step()', bandScale.step());
console.log('bandScale(0)', bandScale(0));

bandScale.domain([0, 1]);
console.log('domain updated');
console.log('bandScale.domain()', bandScale.domain());
console.log('bandScale.bandwidth()', bandScale.bandwidth());
console.log('bandScale.align()', bandScale.align());
console.log('bandScale.step()', bandScale.step());
console.log('bandScale(0)', bandScale(-1));
console.log('bandScale(0)', bandScale(0));
console.log('bandScale(1)', bandScale(1));
console.log('bandScale(2)', bandScale(2));

bandScale.domain([0, 2]);
console.log('domain updated with 2 bands');
console.log('bandScale.domain()', bandScale.domain());
console.log('bandScale.bandwidth()', bandScale.bandwidth());
console.log('bandScale.align()', bandScale.align());
console.log('bandScale.step()', bandScale.step());
console.log('bandScale(0)', bandScale(-1));
console.log('bandScale(0)', bandScale(0));
console.log('bandScale(1)', bandScale(1));
console.log('bandScale(2)', bandScale(2));

console.log('modidying paddingInner')
console.log("bandScale.paddingInner()", bandScale.paddingInner());
console.log('bandScale.paddingOuter()', bandScale.paddingOuter());
console.log('bandScale(0)', bandScale(0));
console.log('bandScale(0.75)', bandScale(0.75));


bandScale.paddingInner(0.1);
console.log('bandScale(0)', bandScale(0));
console.log('bandScale(0.75)', bandScale(0.75));
console.log('bandScale.bandwidth()', bandScale.bandwidth());

console.log('bandScale.paddingOuter()', bandScale.paddingOuter());
console.log('bandScale.step() + bandScale.paddingOuter()', bandScale.step() + bandScale.paddingOuter());
// result is false ? yeas
console.log(bandScale.step() === bandScale.bandwidth() + bandScale.paddingInner())
// check fixes
console.log(bandScale.paddingInner() * bandScale.step() + bandScale.bandwidth() === bandScale.step())

// we can set paddingOuter
console.log('setting paddingOuter')
console.log('bandScale(0)', bandScale(0));
console.log('bandScale(0.75)', bandScale(0.75));
console.log('bandScale.bandwidth(3)', bandScale.bandwidth(3));
console.log(bandScale.paddingOuter(3))
console.log('bandScale(0)', bandScale(0));
console.log('bandScale(0.75)', bandScale(0.75));
console.log('bandScale.bandwidth(3)', bandScale.bandwidth(3));
