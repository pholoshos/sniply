<script>
import { Input,Button } from "flowbite-svelte";
</script>

<div>
  <div class="mb-4">
    <span>email</span>
    <Input type='email' placeholder="enter username"/>
  </div>

  <div class="mb-4">
    <span>password</span>
    <Input type='password' placeholder="enter password"/>
  </div>

  <Button color='primary'>Sign</Button>
</div>
