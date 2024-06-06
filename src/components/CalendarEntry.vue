<template>
  <div id="calender-entry">
    <div class="card shadow">
      <div class="card-header text-center">
        <h5>
          Neuer Termin für: <strong>{{ activeDayName }}</strong>
        </h5>
      </div>
      <div class="card-body">
        <div class="alert alert-danger shadow" v-if="error">
          Der Titel darf nicht leer sein.
        </div>

        <input
          type="text"
          class="form-control"
          placeholder="Neuer Eintrag"
          ref="eventTitleInput"
          v-model="event.title"
          @keyup.enter.exact="submitEvent()"
          @keyup.esc.exact="resetEventTitle()"
        />
        <select class="form-select mt-2" v-model="event.priority">
          <option value="-1">Hohe Priorität</option>
          <option value="0">Geringe Priorität</option>
          <option value="1">Keine Priorität</option>
        </select>
        <div class="text-center mt-3">
          <span
            v-for="color in eventColors"
            :key="color"
            class="d-inline-block alert alert m-0 me-2 square shadow"
            :class="eventColorClasses(color)"
            role="button"
            @click="setEventColor(color)"
          >
          </span>
        </div>
        <hr />
        <div class="d-grid gap-2">
          <button class="btn btn-primary shadow" @click="submitEvent()">
            Speichern
          </button>
          <button class="btn btn-danger shadow" @click="resetEventTitle()">
            Zurücksetzen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Store from "../store";

export default {
  name: "CalendarEntry",
  data() {
    return {
      eventColors: ["primary", "success", "info", "warning", "danger"],
      event: {
        title: "",
        color: "primary",
        priority: 0,
      },
      error: false,
    };
  },
  computed: {
    activeDayName() {
      return Store.getters.activeDay().fullName;
    },
    submitEventButtonStatus() {
      return this.event.title === "";
    },
  },

  mounted() {
    this.$refs.eventTitleInput.focus();
  },

  methods: {
    eventColorClasses(eventColor) {
      return [
        "alert-" + eventColor,
        this.event.color === eventColor
          ? "border border-" + this.event.color
          : "",
      ];
    },
    setEventColor(eventColor) {
      this.event.color = eventColor;
    },
    submitEvent() {
      if (this.event.title === "") return (this.error = true);

      Store.mutations.storeEvent(this.event);
      this.event = {
        title: "",
        color: "primary",
        priority: 0,
      };
      this.error = false;
    },
    resetEventTitle() {
      this.event.title = "";
    },
  },
};
</script>
<style scoped></style>
