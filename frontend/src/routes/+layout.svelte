<script lang="js">
    let {children} = $props();
</script>

<nav>
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/projects">Home</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

{@render children()}

<style>
    .navbar{
      width:100%;
      height:30px;
      background:green;
      display:flex;  
    }

    .navbar a{
        background:pink;
    }
</style>