import { ApiApp, ApiStatusApp } from "@discloudapp/api-types/v2";
import assert from "assert";
import test from "node:test";
import App from "../../structures/App";
import AppStatus from "../../structures/AppStatus";

test("Create App instance", () => {
  assert.ok(new App(<any>{}, <any>{}));
});

test("App with ApiApp", () => {
  const apiAppData = <ApiApp>{
    autoDeployGit: "auto deploy git",
    autoRestart: true,
    avatarURL: "http://avatar.png",
    exitCode: 0,
    id: "id1",
    lang: "js",
    mainFile: "index.js",
    mods: ["mod1"],
    name: "app name",
    online: true,
    ram: 100,
    ramKilled: false,
  };

  const app = new App(<any>{}, apiAppData);

  for (const key of Object.keys(apiAppData)) {
    if (app[<keyof App>key] instanceof Set) {
      assert.equal(app[<"mods">key].has(apiAppData[<"mods">key][0]), true);
    } else {
      assert.equal(app[<keyof App>key], apiAppData[<keyof ApiApp>key]);
    }
  }
});

test("App#status with ApiStatusApp", () => {
  const apiStatusAppData = <ApiStatusApp>{
    container: "Online",
    cpu: "0%",
    id: "id1",
    last_restart: "1s",
    memory: "100MB/100MB",
    netIO: {
      down: "1kb",
      up: "1mb",
    },
    ssd: "1gb",
    startedAt: new Date().toString(),
  };

  const app = new App(<any>{}, apiStatusAppData).status;

  for (const key of Object.keys(apiStatusAppData)) {
    switch (key) {
      case "id":
        assert.equal(app["appId"], apiStatusAppData[<keyof ApiStatusApp>key]);
        break;
      case "last_restart":
        assert.equal(app["lastRestart"], apiStatusAppData[<keyof ApiStatusApp>key]);
        break;
      default:
        assert.equal(app[<keyof AppStatus>key], apiStatusAppData[<keyof ApiStatusApp>key]);
        break;
    }
  }
});
