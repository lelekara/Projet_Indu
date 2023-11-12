import { FormControl, SimpleGrid, FormLabel, Switch } from "@chakra-ui/react";


export default function SwitchSetting() {
    return (
        <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
  <FormLabel htmlFor='isChecked'>isChecked:</FormLabel>
  <Switch id='isChecked' isChecked />

  <FormLabel htmlFor='isDisabled'>isDisabled:</FormLabel>
  <Switch id='isDisabled' isDisabled defaultChecked />

  <FormLabel htmlFor='isFocusable'>isFocusable:</FormLabel>
  <Switch id='isFocusable' isFocusable isDisabled />

  <FormLabel htmlFor='isInvalid'>isInvalid:</FormLabel>
  <Switch id='isInvalid' isInvalid />

  <FormLabel htmlFor='isReadOnly'>isReadOnly:</FormLabel>
  <Switch id='isReadOnly' isReadOnly />

  <FormLabel htmlFor='isRequired'>isRequired:</FormLabel>
  <Switch id='isRequired' isRequired />
</FormControl>
    )
}

