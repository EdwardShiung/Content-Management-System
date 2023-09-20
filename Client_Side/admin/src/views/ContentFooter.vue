<template>
    <footer class="footer">
      <div class="container-fluid d-flex flex-wrap justify-content-between">
        <nav>
          <ul>
            <li>
              <router-link :to="{ path: '/admin' }">Dashboard</router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright d-flex flex-wrap"> &nbsp; Designed by
          <a href="" target="_blank"
            >&nbsp; Edward Shiung</a
          >
        </div>
      </div>
    </footer>
  </template>
  <script>
  export default {};
  </script>
  <style></style>
