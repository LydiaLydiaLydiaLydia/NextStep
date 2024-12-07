import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'verification',
  standalone: false
})
export class VerificationPipe implements PipeTransform {
  transform(verifiedBy: string[]): string {
    if (verifiedBy.length >= 1){
      return 'verified';
    }
    return 'unverified';
  }
}