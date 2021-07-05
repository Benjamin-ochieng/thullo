<template>
  <div class="task-view py-24 w-1/2">
    <!-- <div class="min-h-full p-6 rounded-xl bg-white flex flex-col">
      <p>{{ task }}</p>
    </div> -->
    <div class="min-h-full p-6 rounded-xl bg-white flex flex-col">
      <div id="cover" class="h-32 rounded-xl bg-gray-200 relative">
        <img
          v-if="task.cover"
          :src="task.cover"
          alt="item image"
          class="w-full h-32 absolute inset-0 object-cover rounded-xl"
        />
        <div class="absolute top-0 right-0 -mr-2 -mt-3">
          <base-button icon="cancel" class="w-8 h-8 shadow-md" @click="close" />
        </div>
      </div>
      <div class="flex pt-6">
        <div id="details" class="">
          <div id="task">
            <div class="flex py-6">
              <div class="flex items-center text-xs text-gray-400">
                <base-icon iconId="doc" class="w-2.5 h-2.5 fill-current" />
                <p class="mx-2">Task</p>
              </div>
              <button
                v-if="hideTaskEdit"
                class="
                  flex
                  items-center
                  px-1
                  py-1
                  rounded-lg
                  mx-4
                  text-xs text-gray-400
                  border border-gray-400
                "
                @click="edit('task')"
              >
                <base-icon iconId="pencil" class="w-3 h-3 mx-1 fill-current" />
                <p class="mx-2">Edit</p>
              </button>
              <button
                v-else
                class="
                  flex
                  items-center
                  px-1
                  py-1
                  rounded-lg
                  mx-4
                  text-xs text-gray-400
                  border border-gray-400
                "
                @click="edit('task')"
              >
                <base-icon iconId="check" class="w-3 h-3 mx-1 fill-current" />
                <p class="mx-2">Save</p>
              </button>
            </div>
            <p v-bind:class="{ hidden: !hideTaskEdit }">{{ task.name }}</p>
            <input
              type="text"
              :value="task.name"
              class="w-full"
              v-bind:class="{ hidden: hideTaskEdit }"
              @change="updateCurrentTask($event, 'name')"
            />

            <p>
              <span class="text-xs text-gray-400">In list: </span>
            </p>
          </div>
          <div id="descrition" v-if="task.description">
            <div class="flex py-6">
              <div class="flex items-center text-xs text-gray-400">
                <base-icon iconId="doc" class="w-2.5 h-2.5 fill-current" />
                <p class="mx-2">Description</p>
              </div>
              <button
                v-if="hideDescriptionEdit"
                class="
                  flex
                  items-center
                  px-1
                  py-1
                  rounded-lg
                  mx-4
                  text-xs text-gray-400
                  border border-gray-400
                "
                @click="edit('description')"
              >
                <base-icon iconId="pencil" class="w-3 h-3 mx-1 fill-current" />
                <p class="mx-2">Edit</p>
              </button>
              <button
                v-else
                class="
                  flex
                  items-center
                  px-1
                  py-1
                  rounded-lg
                  mx-4
                  text-xs text-gray-400
                  border border-gray-400
                "
                @click="edit('description')"
              >
                <base-icon iconId="check" class="w-3 h-3 mx-1 fill-current" />
                <p class="mx-2">Save</p>
              </button>
            </div>
            <textarea
              rows="8"
              :value="task.description"
              class="w-full leading-relaxed"
              v-bind:class="{ hidden: hideDescriptionEdit }"
              @change="updateCurrentTask($event, 'description')"
            ></textarea>
            <p class="leading-relaxed" v-bind:class="{ hidden: !hideDescriptionEdit }">
              {{ task.description }}
            </p>
          </div>
          <div id="attachments">
            <div class="flex py-6">
              <div class="flex items-center text-xs text-gray-400">
                <base-icon iconId="clip" class="w-3 h-3 fill-current" />
                <p class="mx-2">Attachments</p>
              </div>
              <button
                class="
                  flex
                  items-center
                  px-1
                  py-1
                  rounded-lg
                  mx-4
                  text-xs text-gray-400
                  border border-gray-400
                "
              >
                <base-icon iconId="plus" class="w-3 h-3 mx-1 fill-current" />
                <p class="mx-2">Add</p>
              </button>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center mb-8">
                <div class="w-24 h-16 bg-gray-200 rounded-xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1470429346530-f5590bff80d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoaW5raW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="attachment image"
                    class="w-full h-full absolute inset-0 object-cover rounded-xl"
                  />
                </div>
                <div class="px-3 flex-col">
                  <p class="text-xxs mb-1 text-gray-400">Added July 5, 2020</p>
                  <p class="text-xs mb-1 font-medium">Reasoning by Ranganath Krishnamani</p>
                  <div class="flex">
                    <button
                      class="
                        flex
                        items-center
                        px-1
                        py-1
                        rounded-lg
                        text-xs text-gray-400
                        border border-gray-400
                      "
                    >
                      <p class="mx-1">Download</p>
                    </button>
                    <button
                      class="
                        flex
                        items-center
                        px-1
                        py-1
                        rounded-lg
                        mx-4
                        text-xs text-gray-400
                        border border-gray-400
                      "
                    >
                      <p class="mx-1">Delete</p>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex items-center mb-8">
                <div class="w-24 h-16 bg-gray-200 rounded-xl relative"></div>
                <div class="px-3 flex-col">
                  <p class="text-xxs mb-1 text-gray-400">Added July 5, 2020</p>
                  <p class="text-xs mb-1 font-medium">Gatsby-config.js</p>
                  <div class="flex">
                    <button
                      class="
                        flex
                        items-center
                        px-1
                        py-1
                        rounded-lg
                        text-xs text-gray-400
                        border border-gray-400
                      "
                    >
                      <p class="mx-1">Download</p>
                    </button>
                    <button
                      class="
                        flex
                        items-center
                        px-1
                        py-1
                        rounded-lg
                        mx-4
                        text-xs text-gray-400
                        border border-gray-400
                      "
                    >
                      <p class="mx-1">Delete</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="comments">
            <form action="" class="p-3 border border-gray-400 rounded-xl shadow-md">
              <textarea
                placeholder="Write a comment..."
                rows="4"
                class="w-full appearance-none focus:outline-none"
              ></textarea>
              <div class="flex justify-end">
                <button
                  class="
                    h-full
                    py-2
                    px-4
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-xs text-white
                    font-medium
                    bg-blue-500
                  "
                >
                  Comment
                </button>
              </div>
            </form>
            <div id="recent-comments" class="pt-7">
              <div class="comment mb-7">
                <div class="mb-3 flex justify-between items-center">
                  <div class="flex">
                    <div class="w-8 h-8">
                      <img
                        src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBmYWNlc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        class="w-full h-full rounded-full"
                      />
                    </div>
                    <div class="pl-3">
                      <p class="text-xs font-medium">Mikael Stanley</p>
                      <p class="text-xxs text-gray-400">24 August at 20:43</p>
                    </div>
                  </div>
                  <div class="flex justify-between text-xxs text-gray-400 font font-medium">
                    <p>Edit</p>
                    <p class="mx-2">-</p>
                    <p>Delete</p>
                  </div>
                </div>
                <div class="">
                  <p class="text-sm">
                    Once the ideas is clearly defined, the task can move to #todo stage.
                  </p>
                </div>
              </div>
              <div class="comment mb-7">
                <div class="mb-3 flex justify-between items-center">
                  <div class="flex">
                    <div class="w-8 h-8">
                      <img
                        src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBmYWNlc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        class="w-full h-full rounded-full"
                      />
                    </div>
                    <div class="pl-3">
                      <p class="text-xs font-medium">Mikael Stanley</p>
                      <p class="text-xxs text-gray-400">24 August at 20:43</p>
                    </div>
                  </div>
                  <div class="flex justify-between text-xxs text-gray-400 font font-medium">
                    <p>Edit</p>
                    <p class="mx-2">-</p>
                    <p>Delete</p>
                  </div>
                </div>
                <div class="">
                  <p class="text-sm">
                    “The gladdest moment in human life, methinks, is a departure into unknown
                    lands.” – Sir Richard Burton
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="actions" class="pl-12 flex-col">
          <div class="my-4 text-xxs text-gray-400 flex">
            <base-icon iconId="user" class="w-3 h-3 fill-current" />
            <p class="mx-3">Actions</p>
          </div>
          <base-button-icon label="Members" icon="group" class="w-36 my-4" />
          <base-button-icon label="Labels" icon="tag" class="w-36 my-4" />
          <base-button-icon label="Cover" icon="imageFile" class="w-36 my-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      hideDescriptionEdit: true,
      hideTaskEdit: true,
    };
  },
  methods: {
    ...mapActions(['updateTask']),
    close() {
      return this.$router.push({ name: 'board' });
    },
    edit(inputId) {
      if (inputId === 'task') this.hideTaskEdit = !this.hideTaskEdit;
      if (inputId === 'description') this.hideDescriptionEdit = !this.hideDescriptionEdit;
    },
    updateCurrentTask(e, target) {
      this.updateTask({
        task: this.task,
        target,
        value: e.target.value,
      });
    },
  },
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
