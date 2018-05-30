(function (inString) {

    Array.prototype.peek = function () {
        return this[this.length - 1];
    };

    let res = "";
    let stack = [];
    let PRIORITY = {
            '^': 3
            , '*': 2
            , '/': 2
            , '+': 1
            , '-': 1
        },
        OPEN = '(',
        CLOSE = ')';

    inString.split('').forEach(current => {
        if (!isOperator(current)) {
            res += current;
        }
        else {

            switch (current) {
                case OPEN : {
                    stack.push(current);
                    break;
                }
                case CLOSE : {
                    let topOfStack = stack.pop();
                    while (topOfStack != OPEN) {
                        res += topOfStack;
                        topOfStack = stack.pop();
                    }

                    break;
                }
                default : {
                    let topOfStack = stack.peek();
                    if (topOfStack) {
                        if (topOfStack == OPEN || PRIORITY[topOfStack] < PRIORITY[current]) {
                            stack.push(current);
                        }
                        else {
                            while (topOfStack != OPEN && PRIORITY[topOfStack] >= PRIORITY[current]) {
                                res += stack.pop();
                                topOfStack = stack.peek();
                            }
                            stack.push(current);
                        }
                    } else {
                        stack.push(current);
                    }
                }
            }
        }

    });

    while (stack.peek()) {
        res += stack.pop();
    }
    console.log(res);

    function isOperator(char) {
        return PRIORITY[char] || char === OPEN || char === CLOSE;
    }

})
//('a+b*(c^d-e)^(f+g*h)-i');
//('A*(B+C)/D');
('12 + 23 - 14');
