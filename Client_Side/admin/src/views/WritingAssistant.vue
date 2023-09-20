<template>
    <div class="outer-container min-vh-90 d-flex align-items-center" >
        <!-- Left-Container -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card w-100">
                        <div class="card-body">
                            <h1 class="h4 text-center">Content Creator</h1>
                            <hr>
                            <!-- input -->
                            <div>
                                <br>
                                <form>
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" id="chatInput" placeholder="Write Something">
                                    </div>
                                </form>
                            </div>
                            <div id="chat" class="overflow-y-auto" style="height: 500px; overflow-y:auto;">

                            </div>
                            <hr>
                            <button type="button" class="btn" style="background-color: #D9D9D9; border: none; color: black;">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Right-Container -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card w-100">
                        <div class="card-body">
                            <h1 class="h4 text-center">Novist AI Assistant</h1>
                            <hr>
                            <!-- Chat -->
                            <div id="chat" class="overflow-y-auto" style="height: 500px; overflow-y:auto;">
                                <!-- GPT -->
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #D9D9D9;">
                                        Hi, I'm Novist. How can I help you?
                                    </p>
                                </div>
                                <!-- Message Template -->
                                <!-- User -->
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/user-logo.png" width="60" alt="" >
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #f1f1f1;">
                                        As a YouTuber, could you please provide me with more ideas for traveling to New York?
                                    </p>
                                </div>
                                <!-- GPT -->
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #D9D9D9;">
                                        If you're traveling to New York, there's no shortage of things to do. Take a stroll or bike ride through Central Park, walk across the Brooklyn Bridge for a great view of the city skyline, or explore the Metropolitan Museum of Art. Try some famous street food, catch a Broadway show, or take a boat tour around Manhattan. Visit the 9/11 Memorial and Museum, explore the unique neighborhoods of New York, and take the elevator to the top of the Empire State Building for a bird's-eye view of the city. Finally, check out some of the world-class museums, such as the American Museum of Natural History, the Guggenheim, and the Museum of Modern Art.
                                    </p>
                                </div>
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #D9D9D9;">
                                        Would you like to know anything else?
                                    </p>
                                </div>
                            </div>
                            <!-- input -->
                            <div>
                                <hr>
                                <form>
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" id="chatInput" placeholder="Asking Something">
                                    </div>
                                </form>
                            </div>
                            <hr>
                            <button type="button" class="btn" style="background-color: #D9D9D9; border: none; color: black;">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'writingassistant',
}
</script>

<style scoped>

@media (max-width: 570px){
    .outer-container {
            display: flex;
            flex-direction: column;
    }
}
</style>