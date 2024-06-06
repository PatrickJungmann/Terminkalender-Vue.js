<template>
  <div id="calendar-event">
    <div class="alert text-center shadow" :class="alertColor">
      <transition name="fade" mode="out-in" @afterEnter="setInputFocus()">
        <div v-if="!event.edit">
          <div>
            <slot
              name="eventPriority"
              :priorityDisplayName="priorityDisplayName"
              ><strong>{{ priorityDisplayName }}</strong>
            </slot>
          </div>
          <slot :event="event">
            <div>{{ event.title }}</div>
          </slot>

          <div>
            <i
              class="fa-regular fa-pen-to-square me-4"
              role="button"
              @click="editEvent()"
            ></i>
            <i
              class="fa-regular fa-square-check"
              role="button"
              @click="deleteEvent()"
            ></i>
          </div>
        </div>
        <div v-else>
          <input
            type="text"
            class="form-control"
            ref="newEventTitleInput"
            :placeholder="event.title"
            @input="setNewEventTitle($event)"
          />
          <select class="form-select mt-2" v-model="newEventPriority">
            <option value="-1">Hohe Priorität</option>
            <option value="0">Geringe Priorität</option>
            <option value="1">Keine Priorität</option>
          </select>
          <hr />
          <i
            class="fa-regular fa-floppy-disk"
            role="button"
            @click="updateEvent()"
          ></i>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Store from "../store.js";

export default {
  name: "CalendarEvent",
  props: {
    event: Object,
    day: Object,
  },
  data() {
    return {
      newEventTitle: "",
      newEventPriority: this.event.priority,
    };
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case 1:
          return "Keine Priorität";
        case 0:
          return "Geringe Priorität";
        case -1:
          return "Hohe Priorität";
      }
      return "Unbekannte Priorität";
    },
    alertColor() {
      return "alert-" + this.event.color;
    },
  },
  methods: {
    deleteEvent() {
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
    editEvent() {
      Store.mutations.editEvent(this.day.id, this.event.title);
    },
    updateEvent() {
      Store.mutations.updateEvent(this.day.id, this.event.title, {
        title: this.newEventTitle,
        priority: this.newEventPriority,
      });
    },
    setNewEventTitle(event) {
      this.newEventTitle = event.target.value;
    },
    setInputFocus() {
      this.$refs.newEventTitleInput.focus();
    },
  },
};
</script>
<style scoped></style>
