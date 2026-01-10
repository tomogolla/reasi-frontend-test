<script>
    import { gallery } from "flowbite-svelte";


    const navigate = (path) => {
      window.location.href = path;
    };
</script>

<header class="flex flex-col relative z-20">

    <nav class="navbar">
    <div class="nav-left">
        <button on:click={() => navigate('/work')}>Work</button>
        <button on:click={() => navigate('/services')}>Services</button>
    </div>

    <div class="nav-right">
        <button on:click={() => navigate('/about')}>About</button>
        <button on:click={() => navigate('/contact')}>Contact</button>
    </div>
    </nav>

    <style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: white;
        margin-left: 100px;
        margin-right: 100px;
    }

    .nav-left,
    .nav-right {
        display: flex;
        gap: 1.5rem;
    }

    button {
        background-color: #e7ecef; 
        color: #111;
        border: none;
        padding: 5px 20px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        /* Key style for the pill shape */
        border-radius: 999px; 
        font-weight: light;
    }

    button:hover {
        opacity: 0.65;
    }

    button:focus {
        outline: none;
    }

    @media (max-width: 640px) {
        .navbar {
        padding: 1rem;
        }

        .nav-left,
        .nav-right {
        gap: 1rem;
        }
    }
    </style>

</header>