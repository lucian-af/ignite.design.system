import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  currentStep: number
  size: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  function validateCurrentStep() {
    if (currentStep < 0) return 0
    if (currentStep > size) return size
    return currentStep
  }

  return (
    <MultiStepContainer>
      <Label>
        Passo {validateCurrentStep()} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <Step key={step} active={currentStep >= step}></Step>
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
