<script>
    export let sectionLabel = "SELECT CLIENTS";
    export let clients = [
        { id: 1, icon: "/images/icons/mimipambo-logo.png", alt: "mimipambo" },
        { id: 2, icon: "/images/icons/goodflea-logo.png", alt: "the good flea" },
        { id: 3, icon: "/images/icons/Scrollbilatroll-logo.png", alt: "scroll bila troll" },
        { id: 4, icon: "/images/icons/APN-logo.png", alt: "APN" },
        
    ];
</script>

<section class="clients">
    <div class="container">
        <p class="section-label">{sectionLabel}</p>
    
        <div class="grid">
            {#each clients as client}
                <div class="card">
                    <img src={client.icon} alt={client.alt} />
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .clients {
        width: 100%;
        padding: 8rem 3rem;
    }

    .container {
        max-width: 1600px;
        margin: 0 auto; 
    }
    .section-label {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #999;
        margin: 0 0 4rem 0;
    }
    .grid {
        display: flex;
        gap: 2rem;
        justify-content: flex-start;
    }

    .card {
        width: 120px;
        height: 120px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card img {
        max-width: 60%;
        max-height: 60%;
        object-fit: cover;
    }

    /* Tablet */
    @media (max-width: 768px) {
        .clients {
            margin: 64px 32px;
        }

        .grid {
            flex-wrap: wrap;
        }
    }

    /* Mobile */
    @media (max-width: 640px) {
        .clients {
            margin: 48px 24px;
        }

        .card {
            width: 90px;
            height: 90px;
        }
    }
</style>
