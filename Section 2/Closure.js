function x() {
    counter = 0;

    function y() {
        counter++;
        console.log(counter);
    }

    return y;
}

const fn = x();

fn();
fn();
