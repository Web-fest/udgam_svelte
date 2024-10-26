<script>
  import '../app.css';

  import {openModal} from '../store';

  let y;
    $: outerHeight = 0;

    function reroute(href) {
        $openModal = false;
        window.location.href = href;
    }
</script>

<slot />
