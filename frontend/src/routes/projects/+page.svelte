<script>
    import { goto } from '$app/navigation';
    import mqthumbnail from '../../lib/assets/projects/mqthumbnail.png';
    
    const projects = [
        {
            id: 'magiquill',
            title: 'Magiquill',
            description: 'A web-based text adventure creation and sharing platform built with Vue, Express, and Node.js. Features a node-based editor for creating interactive stories with modular game logic.',
            image: mqthumbnail
        }
    ];
</script>

<div class="projects-page">
    <div class="projects-container">
        {#each projects as project}
            <div 
                class="project-card" 
                role="button"
                tabindex="0"
                onclick={() => goto(`/projects/${project.id}`)}
                onkeydown={(e) => e.key === 'Enter' && goto(`/projects/${project.id}`)}
            >
                <svg class="project-card-border" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path class="border-path" d="M 0,0 L 100,0 L 100,100 L 0,100 Z" fill="none" vector-effect="non-scaling-stroke" />
                </svg>
                <div class="project-image-container">
                    {#if project.image}
                        <img src={project.image} alt={project.title} class="project-image" />
                    {:else}
                        <div class="project-image-placeholder"></div>
                    {/if}
                </div>
                <div class="project-content">
                    <h2 class="project-title">{project.title}</h2>
                    <p class="project-description">{project.description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style scoped>
    .projects-page {
        background: linear-gradient(to bottom, #101212, #000000);
        min-height: 100%;
        padding: 3rem 2rem;
        box-sizing: border-box;
    }
    .projects-container {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .project-card {
        background: #181818;
        display: flex;
        flex-direction: row;
        overflow: visible;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        position: relative;
        transition: background 0.2s ease;
    }
    .project-card-border {
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        pointer-events: none;
        z-index: 1;
        opacity: 0;
    }
    .border-path {
        stroke: #aaaaaa;
        stroke-width: 3;
        stroke-dasharray: 8 4;
        stroke-dashoffset: 0;
    }
    .project-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
    }
    .project-card:active {
        background: #2a2a2a;
        transition: background 0.1s ease;
    }
    .project-card:hover .project-card-border {
        opacity: 1;
    }
    .project-card:hover .border-path {
        animation: animate-dash 1s linear infinite;
    }
    @keyframes animate-dash {
        to {
            stroke-dashoffset: 12;
        }
    }
    .project-image-container {
        width: 300px;
        min-width: 300px;
        height: 200px;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        z-index: 2;
    }
    .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .project-image-placeholder {
        width: 100%;
        height: 100%;
        background: #1a1a1a;
        border-right: 1px solid #333333;
    }
    .project-content {
        flex: 1;
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        z-index: 2;
    }
    .project-title {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.75rem;
        font-weight: 600;
        color: #ffffff;
        margin: 0 0 1rem 0;
    }
    .project-description {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1rem;
        line-height: 1.7;
        color: #d0d0d0;
        margin: 0;
        text-shadow: 1px 1px 0 rgb(17, 17, 17);
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
        .projects-page {
            padding: 2rem 1rem;
        }
        .project-card {
            flex-direction: column;
        }
        .project-image-container {
            width: 100%;
            min-width: 100%;
            height: 200px;
        }
        .project-image-placeholder {
            border-right: none;
            border-bottom: 1px solid #333333;
        }
        .project-content {
            padding: 1.5rem;
        }
        .project-title {
            font-size: 1.5rem;
        }
        .project-description {
            font-size: 0.95rem;
        }
    }
</style>