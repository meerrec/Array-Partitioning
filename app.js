(function () {
  const {
    random,
    abs
  } = Math;

  const inputArray = [];

  const $inputLength = document.getElementById('inputLength');
  const $inputArray = document.getElementById('inputArray');
  const $outputSetOne = document.getElementById('outputSetOne');
  const $outputSetTwo = document.getElementById('outputSetTwo');
  const $outputDiff = document.getElementById('outputDiff');
  const $more = document.getElementById('more');

  function randomArray(size = 6, weight = 10) {
    return [...Array(size)].map(
      () => random() * weight ^ 0
    );
  }

  function descendingSort() {
    return this.length ? this.sort(
      (a, b) => b - a
    ) : [];
  }

  function sum() {
    return this.reduce(
      (a, b) => a + b, 0
    );
  }

  function partition() {
    const subsetOne = [];
    const subsetTwo = [];
    let sumOne = 0;
    let sumTwo = 0;

    for (let value of this) {
      sumOne = sum.call(subsetOne);
      sumTwo = sum.call(subsetTwo);
      if (sumOne < sumTwo) {
        subsetOne.push(value);
      } else {
        subsetTwo.push(value);
      }
    }

    const difference = abs(sumOne - sumTwo);

    return {
      subsetOne,
      subsetTwo,
      sumOne,
      sumTwo,
      difference
    };
  }

  function renderStart() {
    $inputArray.innerText = `[${this.toString()}]`;
    $inputLength.innerText = `${this.length.toString()}`;
  }

  function renderOutput() {
    const {
      subsetOne,
      subsetTwo,
      sumOne,
      sumTwo,
      difference
    } = this;

    const moreText = `(The sum of the first subarray is <b>${sumOne}</b>, the sum of the second subarray is <b>${sumTwo}</b>, the difference is <b>${difference}<b>.)`;

    $outputSetOne.innerText = `[${subsetOne.toString()}]`;
    $outputSetTwo.innerText = `[${subsetTwo.toString()}]`;
    $outputDiff.innerText = `${difference.toString()}`;
    $more.innerHTML = moreText;
  }

  function init() {
    const startArray = inputArray.length ? inputArray : randomArray(7, 100);
    renderStart.call(startArray);
    // Sort in descending order
    descendingSort.call(startArray);
    const outputData = partition.call(startArray);
    document.getElementById('getSubsets').addEventListener('click', () => renderOutput.call(outputData));
  }

  window.onload = function () {
    init();
  };

})();

