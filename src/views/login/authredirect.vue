<script>
  // import { setToken } from '@/utils/auth'
  // import { githubCallBack } from '@/api/login'

  export default {
    name: 'authredirect',
    created() {
      const hash = window.location.search.slice(1)
      window.opener.location.href = window.location.origin + '/#' + hash
      window.close()
    }
  }
</script>
