//ДЗ 1 и 2, 5 и 7 февраля 2019
//не доделал 3 задание из циклов и не сделал 10 (усложненное) из массивов

function test(s,res){//тестит
    console.log(s + ': ' + res)
}

function tst(func){//тестит
    if (arguments.length===1) {
        func();
    } else {
        var args = [];
        for(var i=1; i<arguments.length; i++) {
            args.push(arguments[i]);
        }
        var s = args.join(', ');
        console.log(s + ': ' + func.apply(null,args));
    }
}

function t(s){//выводит строку с заданием
    console.log('\n*** ' + s + ' ***')
}

//УСЛОВНЫЕ ОПЕРАТОРЫ

//1. Если а – четное посчитать а*б, иначе а+б
function a1(a,b){
    return a%2 ? a+b : a*b;
}

t('1. Если а – четное посчитать а*б, иначе а+б');
test('7 1',a1(7,1));
test('4 2',a1(4,2));
tst(a1,4,2);


//2. Определить какой четверти принадлежит точка с координатами (х,у)
function getQuart(width,height,x,y){
    if(x < 0 || x > width || y < 0 || y > height){
        return 'за пределами';
    }
    if(x < width/2){
        if(y < height/2)
            return 3;
        else if (y > height/2) {
            return 1;
        } else {
            return 'between 1 and 3';
        }
    } else if (x > width/2){
        if(y < height/2){
            return 4;
        }
        else if (y > height/2) {
            return 2;
        } else {
            return 'between 2 and 4'
        }
    } else {
        if (y < height/2) {
            return 'between 3 and 4';
        } else if (y > height/2) {
            return 'between 1 and 2';
        } else {
            return 'in the middle';
        }
    }
}

t('2. Определить какой четверти принадлежит точка с координатами (х,у)');
test('10,10,3,3',getQuart(10,10,3,3));
test('10,10,7,7',getQuart(10,10,7,7));
test('10,10,3,7',getQuart(10,10,3,7));
test('10,10,7,3',getQuart(10,10,7,3));
tst(getQuart,10,10,5,3);
tst(getQuart,10,10,3,5);
tst(getQuart,10,10,5,5);

//3. Найти суммы только положительных из трех чисел
function getOnlyPosSum(a,b,c){
    var stor = 0;
    if(a>0) {
        stor+= a;
    }
    if(b>0) {
        stor+=b;
    }
    if(c>0) {
        stor+=c;
    }
    return stor;
}

t('3. Найти суммы только положительных из трех чисел');
test('1,2,3',getOnlyPosSum(1,2,3));
test('-1,2,3',getOnlyPosSum(-1,2,3));
test('1,-2,3',getOnlyPosSum(1,-2,3));
test('1,2,-3',getOnlyPosSum(1,2,-3));
test('-1,-2,3',getOnlyPosSum(-1,-2,3));
test('-1,-2,-3',getOnlyPosSum(-1,-2,-3));

//4. Посчитать выражение макс(а*б*с, а+б+с)+3
function a4(a,b,c){
    var product = a*b*c;
    var sum = a+b+c;
    if(product>sum)
        return product+3;
    else
        return sum+3;
}
t('4. Посчитать выражение макс(а*б*с, а+б+с)+3');
test('1,2,3',a4(1,2,3));
test('10,2,3',a4(10,2,3));
test('0,2,3',a4(0,2,3));
test('10,2,1',a4(10,2,1));

//5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил

/*
Рейтинг 
Оценка
0-19
F
20-39
E
40-59
D
60-74
C
75-89
B
90-100
A
*/
function getGrade(a){
    if(a<0 || a>100)
        throw Error('нет такого балла');
    if(a<20)
        return 'F';
    if(a<40)
        return 'E';
    if(a<60)
        return 'D';
    if(a<75)
        return 'C';
    if(a<90)
        return 'B';
    if(a<101)
        return 'A';
}

t('5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил');
test('7',getGrade(7));
test('15',getGrade(15));
test('25',getGrade(25));
test('58',getGrade(58));
test('28',getGrade(28));
test('74',getGrade(74));
try {
    test('103',getGrade(103))
} catch (err) {
    console.log('wrong grade');
}
test('57',getGrade(57));

//ЦИКЛЫ

//1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
t('1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99');
function getEvenSum(){
    var sum = 0;
    for(var i=1; i<=99; i++){
        if(i%2===0){
            sum += i;
        }
    }
    return sum;
}
test('res',getEvenSum());

//2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
t('2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)');
function isPrime(x){
    if(x<2) {
        return false;
    }
    if(!((x ^ 0) === x)) { //если не целое
        return false;
    }
    for(var i=2; i<x; i++){
        if(x%i===0) {
            return false;
        }
    }
    return true;
}

for(var i=0; i<30; i++){
    test(i,isPrime(i));
}
test('5.3',isPrime(5.3));

//3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
t('3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)');
function sqrt(n) {
    if (n === 1) {
        return 1;
    }
    for (var i = 2; i <= n; i++) {
        if (i*i > n) {
            return i - 1;
        }
    }
}

tst(sqrt,1);
tst(sqrt,2);
tst(sqrt,3);
tst(sqrt,4);
tst(sqrt,5);
tst(sqrt,6);
tst(sqrt,20);
tst(sqrt,101);
tst(sqrt,3000);
tst(sqrt,3000000);

//4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
t('4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!');
function getFact(n){
    var res = 1;
    for(var i=2; i<=n; i++){
        res *= i;
    }
    return res;
}
for(var i=1; i<10; i++){
    test(i,getFact(i));
}

//5. Посчитать сумму цифр заданного числа
t('5. Посчитать сумму цифр заданного числа');
function getDigitSum(x){
    x = x.toString();
    var sum = 0;
    for(var i=0; i<x.length; i++){
        sum += parseInt(x[i]);
    }
    return sum;
}
test('1234',getDigitSum(1234));
test('54',getDigitSum(54));
test('14',getDigitSum(14));
test('821',getDigitSum(821));
test('1',getDigitSum(1));
test('0',getDigitSum(0));
test('10',getDigitSum(10));

//6. Вывести число, которое является зеркальным отображением последовательности 
t('6. Вывести число, которое является зеркальным отображением последовательности ');
function reverse(x){
    x = x.toString();
    var res = '';
    for(var i=x.length-1; i>=0; i--){
        res += x[i];
    }
    return parseInt(res);
}

test('12345',reverse(12345));
test('1',reverse(1));
test('0',reverse(0));
test('377653',reverse(377653));

//Одномерные массивы

//1. Найти минимальный элемент массива0
t('1. Найти минимальный элемент массива0');
function getMinArrEl(arr){
    if(!arr.length) {
        throw Error('empty array');
    }
    var min = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]<min)
            min = arr[i];
    }
    return min;
}

test('1,2,3,4',getMinArrEl([1,2,3,4]));
test('3,2,1',getMinArrEl([3,2,1]));
test('3,2,10',getMinArrEl([3,2,10]));
test('1',getMinArrEl([1]));
try {
    test('', getMinArrEl([]));
} catch (e) {
    console.log(e.message);
}
test('100,1,2',getMinArrEl([100,1,2]));

//2. Найти макс элемент массива0
t('2. Найти макс элемент массива0');
function getMaxEl(arr){
    if(!arr.length) {
        throw Error('empty array');
    }
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max)
            max = arr[i];
    }
    return max;
}

test('1,2,3,4',getMaxEl([1,2,3,4]));
test('3,2,1',getMaxEl([3,2,1]));
test('3,2,10',getMaxEl([3,2,10]));
test('1',getMaxEl([1]));
try {
    test('', getMaxEl([]));
} catch (e) {
    console.log(e.message);
}
test('100,1,2',getMaxEl([100,1,2]));

//3. Найти индекс минимального элемента массива
t('3. Найти индекс минимального элемента массива');
function getMinElInd(arr){
    if(!arr.length) {
        throw Error('empty array');
    }
    var min = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]<min)
            min = arr[i];
    }
    return arr.indexOf(min);
}

test('1,2,3,4',getMinElInd([1,2,3,4]));
test('3,2,1',getMinElInd([3,2,1]));
test('3,2,10',getMinElInd([3,2,10]));
test('1',getMinElInd([1]));
try {
    test('', getMinElInd([]));
} catch (e) {
    console.log(e.message);
}
test('100,1,2',getMinElInd([100,1,2]));
test('100,1,2,1',getMinElInd([100,1,2,1]));

//4. Найти индекс макс элемента массива
t('4. Найти индекс макс элемента массива');
function getMaxElInd(arr){
    if(!arr.length) {
        throw Error('empty array');
    }
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max)
            max = arr[i];
    }
    return arr.indexOf(max);
}

test('1,2,3,4',getMaxElInd([1,2,3,4]));
test('3,2,1',getMaxElInd([3,2,1]));
test('3,2,10',getMaxElInd([3,2,10]));
test('1',getMaxElInd([1]));
try {
    test('', getMaxElInd([]));
} catch (e) {
    console.log(e.message);
}
test('100,1,2',getMaxElInd([100,1,2]));
test('100,1,2,100',getMaxElInd([100,1,2,100]));

//5.Посчитать сумму элементов массива с нечетными индексами 
t('5.Посчитать сумму элементов массива с нечетными индексами ');
function getOddSum(arr){
    if(!arr.length) {
        throw Error('empty array');
    }
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        if(i%2){
            sum += arr[i];
        }
    }
    return sum;
}

test('1,2,3,4',getOddSum([1,2,3,4]));
test('3,2,1',getOddSum([3,2,1]));
test('3,2,10',getOddSum([3,2,10]));
test('1',getOddSum([1]));
try {
    test('', getOddSum([]));
} catch (e) {
    console.log(e.message);
}
test('100,1,2',getOddSum([100,1,2]));
test('100,1,2,100',getOddSum([100,1,2,100]));

//6. Сделать реверс массива (массив в обратном направлении)
t('6. Сделать реверс массива (массив в обратном направлении)');
function reverseArray(arr){
    var res = [];
    for(var i=arr.length-1; i>=0; i--){
        res.push(arr[i]);
    }
    return res;
}

test('1,2,3,4',reverseArray([1,2,3,4]));
test('3,2,1',reverseArray([3,2,1]));
test('3,2,10',reverseArray([3,2,10]));
test('1',reverseArray([1]));
test('',reverseArray([]));
test('100,1,2',reverseArray([100,1,2]));
test('100,1,2,100',reverseArray([100,1,2,100]));

//7. Посчитать количество нечетных элементов массива
t('7. Посчитать количество нечетных элементов массива');
function getOddNum(arr){
    var n = 0;
    for(i=0; i<arr.length; i++){
        if(i%2)
            n++;
    }
    return n;
}

test('1,2,3,4',getOddNum([1,2,3,4]));
test('3,2,1',getOddNum([3,2,1]));
test('3,2,10',getOddNum([3,2,10]));
test('1',getOddNum([1]));
test('',getOddNum([]));
test('100,1,2',getOddNum([100,1,2]));
test('100,1,2,100',getOddNum([100,1,2,100]));
test('100,1,2,100,1,1,1',getOddNum([100,1,2,100,1,1,1]));

//8. Поменять местами первую и вторую половину массива
t('8. Поменять местами первую и вторую половину массива');
function swapHalves(arr){
    if(arr.length===0 || arr.length%2) {
        throw Error('wrong array');
    }
    var res = [];
    var halflen = arr.length/2;
    for(var i=halflen; i<arr.length; i++){
        res.push(arr[i]);
    }
    for(i=0; i<halflen; i++){
        res.push(arr[i]);
    }
    return res;
}

test('1,2,3,4',swapHalves([1,2,3,4]));
test('100,1,2,100',swapHalves([100,1,2,100]));
test('3,2',swapHalves([3,2]));
try {
    test('',swapHalves([]));
    test('3,2,1', swapHalves([3, 2, 1]));
    test('3,2,10', swapHalves([3, 2, 10]));
    test('1', swapHalves([1]));
    test('100,1,2', swapHalves([100, 1, 2]));
    test('100,1,2,100,1,1,1',swapHalves([100,1,2,100,1,1,1]));
} catch (e) {
    console.log(e.message);
}

//9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 
t('9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) ');
function bubbleSort(arr){
    if(arr.length<2)
        return arr;
    var temp;
    var flag = false;
    while(true){
        for(var i=1; i<arr.length; i++){
            if(arr[i]<arr[i-1]){
                temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
                flag = true;
            }
        }
        if(!flag)
            break;
        else
            flag = false;
    }
    return arr;
}

t('bubble');
test('1,2,3,4',bubbleSort([1,2,3,4]));
test('3,2,1',bubbleSort([3,2,1]));
test('3,2,10',bubbleSort([3,2,10]));
test('1',bubbleSort([1]));
test('',bubbleSort([]));
test('100,1,2',bubbleSort([100,1,2]));
test('100,1,2,100',bubbleSort([100,1,2,100]));
test('100,1,2,100,1,1,1',bubbleSort([100,1,2,100,1,1,1]));
test('3,2',bubbleSort([3,2]));

t('select');
function selectSort(arr){
    if(arr.length<2)
        return arr;
    var temp;
    var minInd;
    for(var i = 0; i<arr.length; i++){
        minInd = i;
        for(var j = i+1; j<arr.length; j++){
            if(arr[j]<arr[minInd]){
                minInd = j;
            }
        }
        if(arr[minInd]<arr[i]){
            temp = arr[i];
            arr[i] = arr[minInd];
            arr[minInd] = temp;
        }
    }
    return arr;
}

test('4,3,2,1',selectSort([4,3,2,1]));
test('1,2,3,4',selectSort([1,2,3,4]));
test('3,2,1',selectSort([3,2,1]));
test('3,2,10',selectSort([3,2,10]));
test('1',selectSort([1]));
test('',selectSort([]));
test('100,1,2',selectSort([100,1,2]));
test('100,1,2,100',selectSort([100,1,2,100]));
test('100,1,2,100,1,1,1',selectSort([100,1,2,100,1,1,1]));
test('3,2',selectSort([3,2]));

t('insert');
function insertSort(arr){
    var current;
    for(var i = 1, l = arr.length; i < l; i++) {
        current = arr[i];
        var j = i;

        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
}

test('4,3,2,1',insertSort([4,3,2,1]));
test('1,2,3,4',insertSort([1,2,3,4]));
test('3,2,1',insertSort([3,2,1]));
test('3,2,10',insertSort([3,2,10]));
test('1',insertSort([1]));
test('',insertSort([]));
test('100,1,2',insertSort([100,1,2]));
test('100,1,2,100',insertSort([100,1,2,100]));
test('100,1,2,100,1,1,1',insertSort([100,1,2,100,1,1,1]));
test('3,2',insertSort([3,2]));

/*
t('qsort');

function squicksort(A, lo, hi) {
    if (lo < hi) {
        p = partition(A, lo, hi);
        quicksort(A, lo, p - 1);
        quicksort(A, p + 1, hi);
    }
}

function spartition(A, lo, hi) {
    var pivot = A[hi];
    var i = lo;
    var tmp;
    for (j = lo; hi - 1; j++) {
        if (A[j] < pivot) {
            tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
            i = i + 1;
        }
    }
    tmp = A[i];
    A[i] = A[hi];
    A[hi] = tmp;
    return i;
}

test('4,3,2,1',quicksort([4,3,2,1]));
test('1,2,3,4',quicksort([1,2,3,4]));
test('3,2,1',quicksort([3,2,1]));
test('3,2,10',quicksort([3,2,10]));
test('1',quicksort([1]));
test('',quicksort([]));
test('100,1,2',quicksort([100,1,2]));
test('100,1,2,100',quicksort([100,1,2,100]));
test('100,1,2,100,1,1,1',quicksort([100,1,2,100,1,1,1]));
test('3,2',quicksort([3,2]));
*/

//ФУНКЦИИ

//1. Получить строковое название дня недели по номеру дня
t('1. Получить строковое название дня недели по номеру дня');
function getDayStr(dn){
    if(dn<1 || dn >7)
        throw Error('это не день');
    var days = [];
    days[1] = 'понедельник';
    days[2] = 'вторник';
    days[3] = 'среда';
    days[4] = 'четверг';
    days[5] = 'пятница';
    days[6] = 'суббота';
    days[7] = 'воскресенье';
    return days[dn];
}

test('1', getDayStr(1));
test('3',getDayStr(3));
test('7',getDayStr(7));
try {
    test('0',getDayStr(0));
    test('8', getDayStr(8));
} catch (e) {
    console.log(e.message);
}

//2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.
t('2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.');
function getDist(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

test('0,0,5,5',getDist(0,0,5,5));

function getN(n){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    return numbers[n];
}

function getFloor(n,n2){
    return getN(Math.floor(n/n2));
}

function ts(n) {//переводит число в строку. Недоделка!
    
    if (n<10) {
        return getN(n);
    }
    if (n<100) {
        var temp = getFloor(n,10);
        return temp + getN(n%10);
    }
    if (n<1000){
        var temp = getFloor(n,100);
        var temp2 = getFloor(n%100,10);
        return temp + temp2 + getN(n%100);
    }
}

t('перевести число в строку');

function decToStr(n) {
    var s = '';
    while (n > 9) {
        s = n % 10 + s;
        n = Math.trunc(n/10);
    }
    s = n + s;
    return s;
}

tst(decToStr,12345);
tst(decToStr,0);
tst(decToStr,10);
tst(decToStr,100);

tst(decToStr,999999999);
tst(decToStr,176107);
tst(decToStr,999999999999991246);

t('Вводим число(0-999), получаем строку с прописью числа.');
const units = ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять'];
const teens = ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
const tens = [null,null,'двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'];
const hundreds = [null,'сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
function num2word(n) {
    if (n < 10) {
        return units[n];
    }
    var nStr = n.toString();
    if (n < 20) {
        return teens[nStr[1]];
    }
    if (n < 100) {
        if (nStr[1] === '0') {
            return tens[nStr[0]];
        }
        return tens[nStr[0]] + ' ' + units[nStr[1]];
    }
    if (n < 1000) {
        var s = hundreds[nStr[0]];
        if (nStr[1] === '1') {
            return s + ' ' + teens[nStr[2]];
        }
        if (nStr[1] !== '0') {
           s += ' ' + tens[nStr[1]];
        }
        if (nStr[2] === '0') {
            return s;
        }
        return s + ' ' + units[nStr[2]];
    }
}

tst(num2word,0);
tst(num2word,1);
tst(num2word,10);
tst(num2word,12);
tst(num2word,20);
tst(num2word,24);
tst(num2word,100);
tst(num2word,101);
tst(num2word,110);
tst(num2word,111);
tst(num2word,117);
tst(num2word,120);
tst(num2word,125);
tst(num2word,160);
tst(num2word,178);

t('Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число');
function word2num(s) {
    var res = '';
    s = s.split(' ');
    var ind = hundreds.indexOf(s[0]);
    if (ind !== -1) {//если сотни
            res += ind;
        if (s.length === 1) {
            res += '00';
        } else if (units.indexOf(s[1]) !== -1) {//1-9
            res += '0' + units.indexOf(s[1]);
        } else if (teens.indexOf(s[1]) !== -1) {//10-19
            res += '1' + teens.indexOf(s[1]);
        } else if (tens.indexOf(s[1]) !== -1) {//десятки
            res += tens.indexOf(s[1]);
            if (s.length === 3) {//десятки с единицами
                res += units.indexOf(s[2]);
            } else {//десятки без единиц
                res += '0';
            }
        }
    } else if (tens.indexOf(s[0]) !== -1) {//если десятки
        res += tens.indexOf(s[0]);
        if (s.length === 2) {//если с единицами
            res += units.indexOf(s[1]);
        } else {
            res += '0';
        }
    } else if (teens.indexOf(s[0]) !== -1) {//10-19
        res += '1' + teens.indexOf(s[0]);
    } else {//0-9
        res += units.indexOf(s[0]);
    }
    return parseInt(res);
}

tst(word2num,'сто');
tst(word2num,'двести');
tst(word2num,'двести пять');
tst(word2num,'двести семнадцать');
tst(word2num,'двести пятьдесят');
tst(word2num,'пятьсот сорок три');
tst(word2num,'сорок');
tst(word2num,'пятьдесят семь');
tst(word2num,'пятнадцать');
tst(word2num,'пять');
tst(word2num,'ноль');