<script lang="js">
    import { goto } from '$app/navigation';
    import navButtonPressed from "$lib/assets/navbar/navbar_pagebutton_pressed.png"
    import navButtonUnpressed from "$lib/assets/navbar/navbar_pagebutton_unpressed.png"
    let {children} = $props();


    let m = null
    // function navButtonHover(event) {
	// 	let r = event.currentTarget.getBoundingClientRect();
	// 	m = {x:event.clientX-r.left, y:event.clientY-r.top}
    // }

</script>

<nav>
    <div class="navbar">
        <button class="navbar-button" on:click={() => goto('/')}>
            <img class="pressed" src={navButtonPressed} alt="" />
            <img class="unpressed" src={navButtonUnpressed} alt="" />
        </button>
        <button class="navbar-button" on:click={() => goto('/projects')}>
            <img class="pressed" src={navButtonPressed} alt="" />
            <img class="unpressed" src={navButtonUnpressed} alt="" />
        </button>
        <button class="navbar-button" on:click={() => goto('/contact')}>
            <img class="pressed" src={navButtonPressed} alt="" />
            <img class="unpressed" src={navButtonUnpressed} alt="" />
        </button>

    </div>
</nav>

{@render children()}

<style>
    .navbar{
      width:100%;
      display:flex;
      height:fit-content;
      padding: 10px;
      background:rgb(214,211,200);
      display:flex;  
    }

    .navbar a{
        background:pink;
    }

    .navbar-button{
        width:60px;
        height:60px;
        padding:0px;
        margin:0px;
        margin-right:10px;
        border:0px;
        background:none;
    }
    .navbar-button img{
        width:60px;
        height:60px;
    }
    .navbar-button .pressed{
        display:none;
    }
    .navbar-button .unpressed{
        display:block;
    }
    .navbar-button:hover .pressed{
        display:block;
    }
    .navbar-button:hover .unpressed{
        display:none;
    }
</style>