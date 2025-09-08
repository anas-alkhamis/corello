# Form Builder

- controller as a vuejs component that will control the input/dropdown/checkbox..
  - controller will access the model DTO instance and give the input the right model and validation object
  - data shared over context from controller to the child static component
  - state of the input loading/disabled/readonly/valid..
  - translation ar/en..
- input/dropdown/checkbox will be static Vuejs component with zero methods over validation and value.
- validation mechanism should be enhanced to access all object data also, allowing complex validation
