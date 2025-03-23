import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoNumbers]',
  standalone: true
})
export class NoNumbersDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange() {
    this.handleInput();
  }

  @HostListener('beforeinput', ['$event']) onBeforeInput(event: InputEvent) {
    if (event.inputType === 'insertFromPaste' || event.inputType === 'insertText') {
      this.handleInput();
    }
  }

  private handleInput() {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    const originalValue = inputElement.value;

    // Remove numeric characters
    const newValue = originalValue.replace(/[0-9]/g, '');

    // Update the input value without numeric characters
    if (originalValue !== newValue) {
      inputElement.value = newValue;

      // Emit the input event to make sure Angular bindings are updated
      inputElement.dispatchEvent(new Event('input'));
    }
  }
}
