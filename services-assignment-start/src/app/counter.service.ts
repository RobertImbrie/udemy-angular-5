export class CounterService {
    numChanges = 0;

    count() {
        console.log(this.numChanges);
        this.numChanges++;
    }
}
