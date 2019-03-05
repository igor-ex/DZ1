//правильно ли тестировал сортировку массивов,
// обернув тесты в функцию и кормя ее колбэками на функции сортировки?
//почему не работает тест ф-ции decToStr?


describe('a1', function () {
    describe('1. Если а – четное посчитать а*б, иначе а+б', function () {
        it ('should return 6', function () {
            const a = 2;
            const b = 3;
            const expected = 6;

            const actual = a1(a, b);
            assert.equal(actual, expected);
        });

        it ('should return 6', function () {
            const a = 1;
            const b = 5;
            const expected = 6;

            const actual = a1(a,b);
            assert.equal(actual, expected);
        })

        it ('should return 8', function () {
            const a = 7;
            const b = 1;
            const expected = 8;

            const actual = a1(a,b);
            assert.equal(actual, expected);
        })

    })
});

describe('getQuart', function () {
    describe('2. Определить какой четверти принадлежит точка с координатами (х,у)', function () {
        const testData = [
            {width: 10, height: 10, x: 3, y: 3, expected: 3},
            {width: 10, height: 10, x: 7, y: 7, expected: 2},
            {width: 10, height: 10, x: 3, y: 7, expected: 1},
            {width: 10, height: 10, x: 7, y: 3, expected: 4},
            {width: 10, height: 10, x: 5, y: 3, expected: 'between 3 and 4'},
            {width: 10, height: 10, x: 3, y: 5, expected: 'between 1 and 3'},
            {width: 10, height: 10, x: 5, y: 5, expected: 'in the middle'},
        ];
        
        testData.forEach(function (data) {
            const {width, height, x, y, expected} = data;

            it(`should return ${expected} when x = ${x} and y = ${y}`, function () {
                const actual = getQuart(width, height, x, y);
                assert.strictEqual(actual, expected);
            })
        })
    })
})

describe ('getOnlyPosSum', function () {
    describe('3. Найти суммы только положительных из трех чисел', function () {
        const testData = [
            {a:1, b:2, c:3, expected:6},
            {a:2, b:-5, c:4, expected:6},
            {a:-1, b:-1, c:-2, expected:0},
            {a:10, b:3, c:0, expected:13},
        ];

        testData.forEach(function(data) {
            const {a, b, c, expected} = data;

            it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, function () {
                const actual = getOnlyPosSum(a, b, c);
                assert.strictEqual(actual, expected);
            })
        })
    })
})

describe ('a4', function () {
    describe('4. Посчитать выражение макс(а*б*с, а+б+с)+3', function () {
        const testData = [
            {a:1, b:2, c:3, expected:9},
            {a:2, b:-5, c:4, expected:4},
        ];

        testData.forEach(function(data) {
            const {a, b, c, expected} = data;

            it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, function () {
                const actual = a4(a, b, c);
                assert.strictEqual(actual, expected);
            })
        })
    })
})

/*
describe ('', function () {
    describe('', function () {
        const testData = [
            {a: , b: , c: , expected: },
            {a: , b: , c: , expected: },
        ];

        testData.forEach(function(data) {
            const {a, b, c, expected} = data;

            it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, function () {
                const actual = (a, b, c);
                assert.strictEqual(actual, expected);
            })
        })
    })
})
*/

describe ('getGrade', function () {
    describe('5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил', function () {
        const testData = [
            {a: 0, expected: 'F'},
            {a: 19, expected: 'F'},
            {a: 7, expected: 'F'},
            {a: 25, expected: 'E'},
            {a: 20, expected: 'E'},
            {a: 58, expected: 'D'},
            {a: 61, expected: 'C'},
            {a: 78, expected: 'B'},
            {a: 97, expected: 'A'},
        ];

        testData.forEach(function(data) {
            const {a, expected} = data;

            it(`should return ${expected} when a = ${a}`, function () {
                const actual = getGrade(a);
                assert.strictEqual(actual, expected);
            })

        })

        const testDataThrows = [-5, 105, 101];

        testDataThrows.forEach(function(a) {
            it('should throw an error when grade is inappropriate', function () {
                assert.throw(function () {
                    getGrade(a);
                });
            })
        })
    })
})

describe ('isPrime', function () {
    describe('2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)', function () {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        for (let i = 1; i < 100; i++) {
            const actual = isPrime(i);
            if (primes.indexOf(i) !== -1) {
                it(`should return true when i is prime (${i})`, function () {
                    assert.isTrue(actual);
                })
            } else {
                it(`should return false when i is not prime (${i})`,function () {
                    assert.isFalse(actual);
                })
            }
        }
    })
})

describe('sqrt', function () {
    describe('3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска', function () {
        const testData = [
            {n: 1, expected: 1},
            {n: 2, expected: 1},
            {n: 3, expected: 1},
            {n: 4, expected: 2},
            {n: 100, expected: 10},
            {n: 105, expected: 10}
        ];

        testData.forEach(function (data) {
            const {n, expected} = data;

            it(`should return ${expected} when n = ${n}`, function () {
                const actual = sqrt(n);
                assert.strictEqual(actual, expected);
            })
        })
    })
});

describe('getFact', function () {
    describe('4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!', function () {
        const testData = [
            {n: 1, expected: 1},
            {n: 2, expected: 2},
            {n: 3, expected: 6},
            {n: 4, expected: 24},
            {n: 5, expected: 120}
        ];

        testData.forEach(function (data) {
            const {n, expected} = data;

            it(`should return ${expected} when n = ${n}`, function () {
                const actual = getFact(n);
                assert.strictEqual(actual, expected);
            })
        })
    })
});

describe('getDigitSum', function () {
    describe('5. Посчитать сумму цифр заданного числа', function () {
        const testData = [
            {x: 1, expected: 1},
            {x: 2, expected: 2},
            {x: 32, expected: 5},
            {x: 0, expected: 0},
            {x: 405, expected: 9}
        ];

        testData.forEach(function (data) {
            const {x, expected} = data;

            it(`should return ${expected} when x = ${x}`, function () {
                const actual = getDigitSum(x);
                assert.strictEqual(actual, expected);
            })
        })
    })
});

describe('reverse', function () {
    describe('6. Вывести число, которое является зеркальным отображением последовательности ', function () {
        const testData = [
            {x: 1, expected: 1},
            {x: 22, expected: 22},
            {x: 32, expected: 23},
            {x: 300, expected: 3},
            {x: 405, expected: 504},
            {x: 48265, expected: 56284}
        ];

        testData.forEach(function (data) {
            const {x, expected} = data;

            it(`should return ${expected} when x = ${x}`, function () {
                const actual = reverse(x);
                assert.strictEqual(actual, expected);
            })
        })
    })
});

describe('getMinArrEl', function () {
    describe('1. Найти минимальный элемент массива', function () {
        const testData = [
            {arr: [1,2,3,4,5], expected: 1},
            {arr: [5,4,3,2,1], expected: 1},
            {arr: [4, 0, 6, 100], expected: 0},
            {arr: [5, 8, -7], expected: -7}
        ];

        testData.forEach(function (data) {
            const {arr, expected} = data;

            it(`should return ${expected} when arr = ${arr}`, function () {
                const actual = getMinArrEl(arr);
                assert.strictEqual(actual, expected);
            })
        })
        it('should thow error', function () {
            const arr = [];
            assert.throw(function () {
                getMinArrEl(arr);
            })
        })
    })
});

describe('getMaxEl', function () {
    describe('1. Найти макс элемент массива', function () {
        const testData = [
            {arr: [1,2,3,4,5], expected: 5},
            {arr: [5,4,3,2,1], expected: 5},
            {arr: [4, 0, 6, 100], expected: 100},
            {arr: [5, 8, -7], expected: 8}
        ];

        testData.forEach(function (data) {
            const {arr, expected} = data;

            it(`should return ${expected} when arr = ${arr}`, function () {
                const actual = getMaxEl(arr);
                assert.strictEqual(actual, expected);
            })
        })

        it('should throw erro', function () {
            const arr = [];
            assert.throw(function () {
                getMaxEl(arr)
            })
        })
    })
});

describe('getMinElInd', function () {
    describe('3. Найти индекс минимального элемента массива', function () {
        const testData = [
            {arr: [1, 2, 3, 4], expected: 0},
            {arr: [3, 2, 1], expected: 2},
            {arr: [1], expected: 0},
            {arr: [1, 0], expected: 1}
        ];
        testData.forEach(function(data) {
            const {arr, expected} = data;
            it(`should return ${expected} when arr = ${arr}`, function () {
                const actual = getMinElInd(arr);
                assert.strictEqual(actual, expected);
            })
        })

        it('should thow an error when array is empty', function () {
            const arr = [];
            assert.throws(function () {
                getMinElInd(arr);
            });
        })
    });
});

describe('getMaxElInd', function () {
    describe('3. Найти индекс макс элемента массива', function () {
        const testData = [
            {arr: [1, 2, 3, 4], expected: 3},
            {arr: [3, 2, 0], expected: 0},
            {arr: [1], expected: 0},
            {arr: [1, 0], expected: 0}
        ];
        testData.forEach(function(data) {
            const {arr, expected} = data;
            it(`should return ${expected} when arr = ${arr}`, function () {
                const actual = getMaxElInd(arr);
                assert.strictEqual(actual, expected);
            })
        })

        it('should thow an error when array is empty', function () {
            const arr = [];
            assert.throws(function () {
                getMaxElInd(arr);
            });
        })
    });
});

describe('getOddSum', function () {
    describe('5.Посчитать сумму элементов массива с нечетными индексами ', function () {
        const testData = [
            {arr: [1,2,3,4], expected: 6},
            {arr: [3,2,1], expected: 2},
            {arr: [3,2,10], expected: 2},
            {arr: [1], expected: 0}
        ];
        testData.forEach(function (data) {
            const {arr, expected} = data;
            it(`should return ${expected} when data is ${arr}`, function () {
                const actual = getOddSum(arr);
                assert.strictEqual(actual, expected);
            })

            it('should throw an error when array is empty', function () {
                const arr = [];
                assert.throw(function () {
                    getOddSum(arr);
                })
            })
        })
    })
})

describe('reverseArray',function () {
    describe('6. Сделать реверс массива (массив в обратном направлении)', function () {
        const testData = [
            {arr: [1,2,3,4], expected: [4,3,2,1]},
            {arr: [1,2,3,4], expected: [4,3,2,1]},
            {arr: [0,1], expected: [1,0]},
            {arr: [1], expected: [1]},
            {arr: [], expected: []}
        ];
         testData.forEach(function (data) {
             const {arr, expected} = data;
             it(`sould return ${expected} when array = ${arr}`, function () {
                 const actual = reverseArray(arr);
                 assert.deepEqual(actual, expected);
             })
         })
    });
})

describe('getOddNum', function () {
    describe('7. Посчитать количество нечетных элементов массива', function () {
        const testData = [
            {arr: [1,2,3,4], exp: 2},
            {arr: [1], exp: 0},
            {arr: [100,1,2,100,1,1,1], exp: 3},
            {arr: [], exp: 0},
            {arr: [7, 9], exp: 1}
        ];
        testData.forEach(function (data) {
            const {arr, exp} = data;
            it(`should return ${exp} when arr = ${arr}`,function () {
                const actual = getOddNum(arr);
                assert.strictEqual(actual, exp);
            })
        })
    });
});

describe('swapHalves', function () {
    describe('8. Поменять местами первую и вторую половину массива', function () {
        const testData = [
            {arr: [1,2,3,4], exp: [3,4,1,2]},
            {arr: [0, 6], exp: [6, 0]},
            {arr: [0, 0], exp: [0, 0]},
            {arr: [8, 6, 100, 57], exp: [100, 57, 8, 6]}
        ]
        testData.forEach(function (data) {
            const {arr, exp} = data;
            it(`should return ${exp} when arr is ${arr}`, function () {
                const actual = swapHalves(arr);
                assert.deepEqual(actual, exp);
            })


        })

        const testData2 = [
            [0, 5, 7],
            [1, 1, 1],
            [],
            [5],
            [4, 7, 8]
        ]
        testData2.forEach(function (arr) {
            it(`shoul throw an error when array = ${arr}`, function () {
                assert.throw(function () {
                    swapHalves(arr);
                })
            })
        })
    });
});

function testSorts(sortName, description, sortFunc) {
    describe(sortName, function () {
        describe(description, function () {
            const testData = [
                {arr: [1, 2, 3, 4], expected: [1, 2, 3, 4]},
                {arr: [3, 2, 1], expected: [1, 2, 3]},
                {arr: [3, 2, 10], expected: [2, 3, 10]},
                {arr: [1], expected: [1]},
                {arr: [], expected: []},
                {arr: [7, 4], expected: [4, 7]},
                {arr: [6, 0], expected: [0, 6]},
                {arr: [4, 5, 4], expected: [4, 4, 5]}
            ];

            testData.forEach(function (data) {
                const {arr, expected} = data;

                it(`should return ${expected} when arr = ${arr}`, function () {
                    const actual = sortFunc(arr);
                    assert.deepEqual(actual, expected);
                })
            })
        })
    })
}

testSorts('bubbleSort', '9. Отсортировать массив пузырьком', bubbleSort);
testSorts('selectSort', 'сортирует массив выбором', selectSort);
testSorts('insertSort','сортировка вставкой', insertSort);

describe('getDayStr', function () {
    describe('1. Получить строковое название дня недели по номеру дня', function () {
        const testData = [
            {day: 1, exp: 'понедельник'},
            {day: 2, exp: 'вторник'},
            {day: 7, exp: 'воскресенье'}
        ];
        testData.forEach(function (data) {
            const {day, exp} = data;
            it(`should return ${exp} when day is ${day}`, function () {
                const act = getDayStr(day);
                assert.strictEqual(act, exp);
            })
        })
        const testDataThrows = [0, -1, 8, 10];
        testDataThrows.forEach(function (day) {
            it(`should trhow an error when day is ${day}`, function () {
                assert.throws(function () {
                    getDayStr(day);
                });
            })
        })

    });
});

describe('getDist', function () {
    describe('2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.', function () {
        const testData = [
            {data: [-3, 0, 0, 0], exp: 3},
            {data: [0, 0, 0, 0], exp: 0},
        ];
        testData.forEach(function (dat) {
            const {data, exp} = dat;
            it(`should return ${exp} when data = ${data}`, function () {
                const act = getDist(data[0], data[1], data[2], data[3]);
                assert.strictEqual(act, exp);
            })
        })
    })
})

describe('decToStr', function () {
    describe('перевести число в строку', function () {
        const testData = [
            {n: 0, exp: '0'},
            {n: 1, exp: '1'},
            {n: 10, exp: '10'},
            {n: 159, exp: '159'}
        ];
        testData.forEach(function (data) {
            const {n, exp} = data;
            it(`should return ${exp} when n = ${n}`, function () {
                const act = decToStr(n);
                assert.strictEqual(act, exp, `act ${act}, exp ${exp}`);
            })
        })
    });
});


describe('num2word', function () {
    describe('Вводим число(0-999), получаем строку с прописью числа', function () {
        const testData = [
            {number: 0, word: 'ноль'},
            {number: 1, word: 'один'},
            {number: 10, word: 'десять'},
            {number: 12, word: 'двенадцать'},
            {number: 20, word: 'двадцать'},
            {number: 24, word: 'двадцать четыре'},
            {number: 100, word: 'сто'},
            {number: 101, word: 'сто один'},
            {number: 110, word: 'сто десять'},
            {number: 111, word: 'сто одиннадцать'},
            {number: 117, word: 'сто семнадцать'},
            {number: 120, word: 'сто двадцать'},
            {number: 125, word: 'сто двадцать пять'},
            {number: 160, word: 'сто шестьдесят'},
            {number: 178, word: 'сто семьдесят восемь'},
        ];


        testData.forEach(function (data) {

            const {number, word} = data;

            it('should get things done', function () {
                const act = num2word(number);
                assert.strictEqual(act, word);

            });
        });
    });
});

describe('word2num', function () {
    describe('Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число', function () {
        const testData = [
            {number: 100, word: 'сто'},
            {number: 200, word: 'двести'},
            {number: 205, word: 'двести пять'},
            {number: 217, word: 'двести семнадцать'},
            {number: 250, word: 'двести пятьдесят'},
            {number: 543, word: 'пятьсот сорок три'},
            {number: 40, word: 'сорок'},
            {number: 57, word: 'пятьдесят семь'},
            {number: 15, word: 'пятнадцать'},
            {number: 5, word: 'пять'},
            {number: 0, word: 'ноль'},
        ];


        testData.forEach(function (data) {

            const {number, word} = data;

            it('should get things done', function () {
                const act = word2num(word);
                assert.strictEqual(act, number);

            });
        });
    });
});